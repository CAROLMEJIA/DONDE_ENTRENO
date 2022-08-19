import axios from "axios";

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
export const GET_TURNS = "GET_TURNS";
export const GET_GYM_INFO = "GET_GYM_INFO";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_DAY = "FILTER_BY_DAY";
export const GET_DETAIL_PROFESSIONAL = "GET_DETAIL_PROFESSIONAL";
export const CLEAN_DETAIL_PROFESSIONAL = "CLEAN_DETAIL_PROFESSIONAL";
/* export const POST_COMMENT_AND_RATE = "POST_COMMENT_AND_RATE"; */

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const activities = await axios.get("http://localhost:3001/activities");
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
      const prof = await axios.get("http://localhost:3001/professionals");
      dispatch({
        type: GET_PROFESSIONALS,
        payload: prof.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTurns = () => {
  return async (dispatch) => {
    try {
      const turns = await axios.get("http://localhost:3001/turns");
      dispatch({
        type: GET_TURNS,
        payload: turns.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGymInfo = () => {
  return async (dispatch) => {
    try {
      const info = await axios.get("http://localhost:3001/info");
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

export const getProfessionalsDetail = (id) => {
  return async (dispatch) => {
    try {
      const detailProf = await axios.get(
        `http://localhost:3001/professionals/${id}`
      );
      dispatch({
        type: GET_DETAIL_PROFESSIONAL,
        payload: detailProf.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanProfessionalDetail = () => {
  return {
    type: CLEAN_DETAIL_PROFESSIONAL,
    payload: [],
  };
};

export const filterByDay = (payload) => {
  return {
    type: FILTER_BY_DAY,
    payload: payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: payload,
  };
};
