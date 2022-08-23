import axios from "axios";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
export const GET_TURNS = "GET_TURNS";
export const GET_GYM_INFO = "GET_GYM_INFO";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_DAY = "FILTER_BY_DAY";
export const GET_ALL_TURNS = "GET_ALL_TURNS";
export const POST_REGISTER="POST_REGISTER";
export const POST_USER_LOGIN="USER_LOGIN";
/* export const GET_DETAIL_PROFESSIONAL = "GET_DETAIL_PROFESSIONAL";
export const CLEAN_DETAIL_PROFESSIONAL = "CLEAN_DETAIL_PROFESSIONAL"; */
/* export const POST_COMMENT_AND_RATE = "POST_COMMENT_AND_RATE"; */

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const activities = await axios.get("http://localhost:3001/activity");
      dispatch({
        type: GET_ACTIVITIES,
        payload: activities.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfessionals = () => {
  return async (dispatch) => {
    try {
      const prof = await axios.get("http://localhost:3001/professional");
      //console.log(prof.data)
      dispatch({
        type: GET_PROFESSIONALS,
        payload: prof.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTurns = (filter) => {
  //console.log("filter", filter);
  return async (dispatch) => {
    try {
      //const turns = await axios.get("http://localhost:3001/classpass");
      dispatch({
        type: GET_TURNS,
        payload: filter.length > 0 ? filter : [],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllTurns = () => {
  return async (dispatch) => {
    try {
      const turnos = await axios.get("http://localhost:3001/classpass");
      dispatch({
        type: GET_ALL_TURNS,
        payload: turnos.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGymInfo = () => {
  return async (dispatch) => {
    try {
      const info = await axios.get("http://localhost:3001/gym");
      //console.log(info)
      dispatch({
        type: GET_GYM_INFO,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

/* export const commentAndRate = (comment) => {
  async (dispatch) => {
    try {
      const commNRate = await axios.post(
        "http://localhost:3001/comments",
        comment
      );
      dispatch({
        type: POST_COMMENT_AND_RATE,
        payload: commNRate.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}; */

// export const filterByDay = (payload) => {
//   return {
//     type: FILTER_BY_DAY,
//     payload: payload,
//   };
// };

export const filterByActivity = (payload) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_BY_ACTIVITY,
      payload: payload,
    });
  };
};

  
export const postRegister=(info)=>{
  console.log(info)
  return async function (dispatch){
   let respuesta=await axios.post("http://localhost:3001/user",info)
    
   dispatch({
    type: FILTER_BY_ACTIVITY,
    payload: respuesta,
  });
  }
     
}
export const userLogin=(infologin)=>{
  console.log(infologin)
  return async function (dispatch){
   let respuesta=await axios.post("http://localhost:3001/userlogin",infologin)
    
   dispatch({
    type: POST_USER_LOGIN,
    payload: respuesta,
  });
  }
     
}