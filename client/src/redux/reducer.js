import {
  GET_ACTIVITIES,
  GET_PROFESSIONALS,
  GET_TURNS,
  GET_GYM_INFO,
  FILTER_BY_ACTIVITY,
  FILTER_BY_DAY,
  GET_ALL_TURNS,
  POST_REGISTER,
  POST_USER_LOGIN,
  DELETE_PROF,
  POST_PROF,
  EDIT_PROF,
  DELETE_ACTIV,
  POST_ACTIV,
  GET_MEMBERSHIPS,
  POST_CLASSPASS,
  DELETE_TURN,
  // POST_COMMENT_AND_RATE
  DELETE_ALERT_LOGIN,
  POST_USER_LOGIN_THIRD,
  DELETE_FORM_REGISTER
} from "./actions";

const initialState = {
  activities: [],
  activitiesBackUp: [],
  professionals: [],
  detail: [],
  turns: [],
  allTurn: [],
  gymInfo: [],
  memberships: [],
  register: [],
  user: [],
  logged: false,
  loggedmensage:[],
};

const rootReducer = (state = initialState, action) => {
  //console.log('reducer', action.payload);
  // console.log(state.loggedmensage)
  switch (action.type) {
    
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        activitiesBackUp: action.payload,
      };

    case GET_MEMBERSHIPS:
      return {
        ...state,
        memberships: action.payload,
      };

    case GET_ALL_TURNS:
      return {
        ...state,
        allTurn: action.payload,
      };

    case GET_TURNS:
      return {
        ...state,
        turns: action.payload,
      };

    case GET_GYM_INFO:
      return {
        ...state,
        gymInfo: action.payload,
      };

    case GET_PROFESSIONALS:
      return {
        ...state,
        professionals: action.payload,
      };

    case FILTER_BY_ACTIVITY:
      const copiaB = state.activitiesBackUp;
      const filter =
        action.payload !== "all"
          ? copiaB.find(
            (e) => e.name.toLowerCase() === action.payload.toLowerCase()
          )
          : state.activitiesBackUp;
      return {
        ...state,
        activities: Array.isArray(filter) ? filter : [filter],
      };

    case FILTER_BY_DAY:
      return {
        ...state,
        dayTurn:
          action.payload !== "all"
            ? state.turns.filter((turn) => turn.date === action.payload)
            : state.turns,
      };

    case DELETE_PROF:
      return {
        ...state,
        professionals: action.payload,
      };

    case EDIT_PROF:
      return {
        ...state,
        professionals: [...state.professionals, action.payload],
      };

    case POST_PROF:
      return {
        ...state,
        professionals: [...state.professionals, action.payload],
      };

    case DELETE_ACTIV:
      return {
        ...state,
        activitiesBackUp: action.payload,
        activities: action.payload

      };

    case POST_ACTIV:
      return {
        ...state,
        activitiesBackUp: [...state.activitiesBackUp, action.payload],
      };

    // case POST_COMMENT_AND_RATE:
    //     return {
    //         ...state,
    //         action.payload
    //     }

    case POST_REGISTER:
      console.log(action.payload)
      const  respuesta1=action.payload.data;
      const  connected1=respuesta1.token? true:false;
      
      return {
        ...state,
        // user: user_connet1,
        register: action.payload,
        logged:connected1,
      };

    case POST_USER_LOGIN:
     
  
     const  respuesta=action.payload.data;
     const  connected=respuesta.token? true:false;
     const user_connet= respuesta.token ? respuesta.findUser:null;
    
      return {
        ...state, 
        // user: user_connet,
        loggedmensage:respuesta,
        logged:connected,

      };
    
    case POST_CLASSPASS:
      return {
        ...state,
        allTurn: [...state.allTurn],
        turns: [...state.turns]
      };


    case DELETE_TURN:
      return {
        ...state,
        turns: action.payload,

      };

    case DELETE_FORM_REGISTER:
      return {
        ...state,
        register: action.payload
      };

    case DELETE_ALERT_LOGIN:
      return {
        ...state,
        loggedmensage: action.payload
      };

   

    case POST_USER_LOGIN_THIRD:
      return {
        ...state,
        user: action.payload.data.user,
        logged: action.payload.data.token ? true : false,
        loggedmensage: action.payload.data
      };


    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
