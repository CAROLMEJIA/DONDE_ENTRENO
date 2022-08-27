import axios from "axios";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
export const GET_TURNS = "GET_TURNS";
export const GET_GYM_INFO = "GET_GYM_INFO";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_DAY = "FILTER_BY_DAY";
export const GET_ALL_TURNS = "GET_ALL_TURNS";
export const POST_REGISTER = "POST_REGISTER";
export const POST_USER_LOGIN = "USER_LOGIN";
export const DELETE_PROF = "DELETE_PROF";
export const EDIT_PROF = "EDIT_PROF";
export const POST_PROF = "POST_PROF";
export const DELETE_ACTIV = "DELETE_ACTIV";
export const POST_ACTIV = "POST_ACTIV";
export const POST_CLASSPASS = "POST_CLASSPASS";
export const DELETE_TURN = "DELETE_TURN";
export const GET_MEMBERSHIPS = 'GET_MEMBERSHIPS';
export const PAYMENT = 'PAYMENT';
export const DELETE_ALERT_LOGIN="DELETE_ALERT_LOGIN";
export const POST_USER_LOGIN_THIRD="POST_USER_LOGIN_THIRD";
export const DELETE_FORM_REGISTER="DELETE_REGISTER"
export const PAYMENT_ERROR = "PAYMENT_ERROR"

export const getMemberships = () => {
  return async (dispatch) => {
    try {
      const membership = await axios.get("http://localhost:3001/membership");
      dispatch({
        type: GET_MEMBERSHIPS,
        payload: membership.data,
      });
    } catch (error) {}
  };
};

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

export const deleteActiv = (id) => {
  return async (dispatch) => {
    try {
      const deleteAct = await axios.delete(
        `http://localhost:3001/activity/${id}`
      );
      dispatch({
        type: DELETE_ACTIV,
        payload: deleteAct.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postActiv = (obj) => {
  return async (dispatch) => {
    try {
      const postAct = await axios.post(`http://localhost:3001/activity`, obj);
      dispatch({
        type: POST_ACTIV,
        payload: postAct.data,
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
      dispatch({
        type: GET_GYM_INFO,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

/* export const commentAndRate = (rate) => {
  async (dispatch) => {
    try {
      const rate = await axios.post(
        "http://localhost:3001/comments",
        rate
      );
      dispatch({
        type: POST_RATE,
        payload: rate.data,
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

export const postRegister = (info) => {
  return async function (dispatch) {
   try{
    let respuestaregister = await axios.post("http://localhost:3001/user", info);
   if(respuestaregister){
    dispatch({
      type: POST_REGISTER,
      payload: respuestaregister,
    })};}catch(error){
     if(error){
      dispatch({
        type: POST_REGISTER,
        payload: error.response.data,
      });
    }}
  };
};

export const userLogin = (infologin) => {
  return async function (dispatch) {
    try{
    let respuesta = await axios.post( "http://localhost:3001/userlogin", infologin);
    
    if(respuesta){
    dispatch({
      type: POST_USER_LOGIN,
      payload: respuesta
    });}}catch(error){
      
      if(error){
      dispatch({
        type: POST_USER_LOGIN,
        payload: error.response.data
      });
     }
    }
  };
};

export const postClasspass = (id, obj) => {
  return async function (dispatch) {
    try {
      const resClass = await axios.post(
        `http://localhost:3001/classpass/${id}`,
        obj
      );
      dispatch({
        type: POST_CLASSPASS,
        payload: resClass.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletTurn = (id) => {
  return async function (dispatch) {
    try {
      const delTurn = await axios.delete(
        `http://localhost:3001/classpass/${id}`
      );
      console.log(delTurn);
      return dispatch({
        type: DELETE_TURN,
        payload: delTurn.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAlert= () => {
  return async function (dispatch) {
    dispatch({
      type: DELETE_ALERT_LOGIN,
      payload: ""
    });
  }

}

export const deleteformregister= () => {
  return async function (dispatch) {
    dispatch({
      type: DELETE_FORM_REGISTER,
      payload: ""
    });
  }

}

export const regiterFacebook_Google=(inforedes)=>{
  return async function (dispatch) {
    let respuesta = await axios.post("http://localhost:3001/userloginthird", inforedes)
   
    dispatch({
      type: POST_USER_LOGIN_THIRD,
      payload: respuesta
    });
  }

}

export function stripeAction(paymentMethod, info){
  return async function(dispatch){
    
    try{
      const {data} = await axios.post("http://localhost:3001/payment", {paymentMethod, info} )
      console.log(data);
      return dispatch({
          type: PAYMENT,
          payload:data
      })
    }catch(error){
      console.log(error.response.data)
      return dispatch({
        type: PAYMENT_ERROR,
        payload:error.response.data
    })
      
    }
  }
}
