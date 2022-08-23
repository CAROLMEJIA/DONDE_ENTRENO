import axios from "axios";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
export const GET_TURNS = "GET_TURNS";
export const GET_GYM_INFO = "GET_GYM_INFO";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_DAY = "FILTER_BY_DAY";
export const GET_ALL_TURNS = "GET_ALL_TURNS";
export const DELETE_PROF = "DELETE_PROF";
export const EDIT_PROF = "EDIT_PROF";
export const POST_PROF = "POST_PROF";
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

export const deleteProf = (id) => {
  return async (dispatch) => {
    try {
      const delProf = await axios.delete(
        `http://localhost:3001/professional/${id}`
      );
      dispatch({
        type: DELETE_PROF,
        payload: delProf.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProf = (obj) => {
  return async (dispatch) => {
    try {
      const editProf = await axios.put(
        `http://localhost:3001/professional/`,
        obj
      );
      dispatch({
        type: EDIT_PROF,
        payload: editProf.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProf = (obj) => {
  return async (dispatch) => {
    try {
      const postProf = await axios.post(
        `http://localhost:3001/professional`,
        obj
      );
      console.log(postProf.data);
      dispatch({
        type: POST_PROF,
        payload: postProf.data,
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

export const filterByActivity = (payload) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_BY_ACTIVITY,
      payload: payload,
    });
  };
};
