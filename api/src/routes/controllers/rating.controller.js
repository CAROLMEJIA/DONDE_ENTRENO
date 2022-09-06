const { Rating } = require("../../db/db.js");
const { Activity } = require("../../db/db.js");

async function getAllRatings() {
  const activities = await Activity.findAll({
    attributes: ["id"],
    raw: true,
  });
  //console.log("Activities: ", activities);

  const ratings = await Promise.all(
    activities.map(async (act) => {
      const rating = await Rating.findAll({
        where: {
          activityId: act.id,
        },
        attributes: ["value"],
        raw: true,
      });

      return {
        activityId: act.id,
        rating: rating.map((val) => {
          return val.value;
        }),
      };
    })
  );
  //console.log("Ratings: ", ratings);

  const ratingsPromediado = ratings.map((rat) => {
    let aux = 0;
    for (let i = 0; i < rat.rating.length; i++) {
      aux = aux + rat.rating[i];
    }

    return {
      activityId: rat.activityId,
      rating: Math.round(
        aux / (rat.rating.length === 0 ? 1 : rat.rating.length)
      ),
      votes: rat.rating.length,
    };
  });
  //console.log("Promediado: ", ratingsPromediado);

  return ratingsPromediado;
}

async function getActivityRating(id) {
  const rating = await Rating.findAll({
    where: {
      activityId: id,
    },
    attributes: ["value"],
    raw: true,
  });

  let aux = 0;
  for (let i = 0; i < rating.length; i++) {
    aux = aux + rating[i].value;
  }

  return {
    activityId: Number(id),
    rating: Math.round(
      aux / (rating.length === 0 ? 1 : rating.length)
    ),
    votes: rating.length,
  };

}

async function addActivityRating(activityId, userId, value) {
  const rating = await Rating.create({
    value: value,
    activityId: activityId,
    userId: userId,
  });

  return rating;
}

async function getUserActivityRating(activityId, userId) {
  const rating = await Rating.findAll({
    where: {
      activityId: activityId,
      userId: userId,

    },
    attributes: ["value"],
    raw: true,
  });

  return rating;
}





async function modifActivityRating(activityId, userId, value) {
  return "EHHHHH, NOPE";
}

module.exports = {
  getAllRatings,
  getActivityRating,
  addActivityRating,
  modifActivityRating,
  getUserActivityRating,
};
