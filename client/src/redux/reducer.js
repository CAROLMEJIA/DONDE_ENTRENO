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
  GET_USER_INFO,
  EDIT_PROF,
  DELETE_ACTIV,
  POST_ACTIV,
  GET_MEMBERSHIPS,
  POST_CLASSPASS,
  DELETE_TURN,
  PUT_DATA_USER,
  // POST_COMMENT_AND_RATE
  DELETE_ALERT_LOGIN,
  POST_USER_LOGIN_THIRD,
  DELETE_FORM_REGISTER,
  PAYMENT,
  PAYMENT_ERROR,
  UPDATE_PAYMENT,
  LOGOUT_USER,
  SUBSCRIPTION_USER,
  UPDATE_SUBSCRIPTION,
  FORGOT_PASSWORD,
  DELETE_MESSAGE_FORGOT,
  ELIMINAR_USER,
  GET_ALL_USERS,
  RESET_PASSWORD,
  GET_INACTIVE_USERS,
  DELETE_MEMBERSHIP,
  POST_MEMBERSHIP,
  UPDATE_CAPACITY,
  RATING_ACTV,
  USER_ACTIVITY_LIST,
  USER_RATINGS_LIST,
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
  loggedmensage: [],
  payment: [],
  payment_error: [],
  subscription: [],
  forgotpassword: [],
  userEliminado: [],
  usuarios: [],
  resetpassword: [],
  usuarioInactivo: [],
  ratingCard: [],
  userActivityList: [],
  userRatingsList: [],
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
        activities: action.payload,
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
      const respuesta1 = action.payload;
      const connected1 = respuesta1.token ? true : false;

      return {
        ...state,
        // user: user_connet1,
        register: action.payload,
        logged: connected1,
      };

    case POST_USER_LOGIN:
      const respuesta = action.payload.data;
      const connected = respuesta.token ? true : false;
      const user_connet = respuesta.token ? respuesta.findUser : null;
      return {
        ...state,
        user: action.payload.data.findUser,
        loggedmensage: respuesta,
        logged: connected,
      };

    case POST_CLASSPASS:
      return {
        ...state,
        allTurn: [...state.allTurn],
        turns: [...state.turns],
      };

    case PUT_DATA_USER:
      console.log("action", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case DELETE_TURN:
      return {
        ...state,
        turns: action.payload,
      };

    case DELETE_FORM_REGISTER:
      return {
        ...state,
        register: action.payload,
      };

    case DELETE_ALERT_LOGIN:
      return {
        ...state,
        loggedmensage: action.payload,
      };

    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };

    case POST_USER_LOGIN_THIRD:
      return {
        ...state,
        user: action.payload.data.findUser,
        logged: action.payload.data.token ? true : false,
        loggedmensage: action.payload.data,
      };

    case PAYMENT:
      return {
        ...state,
        payment: action.payload,
        payment_error: {},
      };

    case PAYMENT_ERROR:
      return {
        ...state,
        payment_error: action.payload,
        payment: {},
      };

    case UPDATE_PAYMENT:
      return {
        ...state,
        payment: {},
        payment_error: {},
      };

    case SUBSCRIPTION_USER:
      return {
        ...state,
        subscription: action.payload,
      };

    case UPDATE_SUBSCRIPTION:
      return {
        ...state,
        subscription: {},
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: [],
        logged: false,
        loggedmensage: [],
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotpassword: action.payload,
      };

    case DELETE_MESSAGE_FORGOT:
      return {
        ...state,
        forgotpassword: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        usuarios: action.payload,
      };
    case ELIMINAR_USER:
      return {
        ...state,
        userEliminado: action.payload,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        resetpassword: action.payload,
      };

    case GET_INACTIVE_USERS:
      return {
        ...state,
        usuarioInactivo: action.payload,
      };

    case DELETE_MEMBERSHIP:
      return {
        ...state,
        memberships: action.payload,
      };

    case POST_MEMBERSHIP:
      return {
        ...state,
        memberships: [...state.memberships, action.payload],
      };
    case UPDATE_CAPACITY:
      return {
        ...state,
        turns: [...state.turns],
      };
    case RATING_ACTV:
      return {
        ...state,
        ratingCard: action.payload,
      };
    case USER_ACTIVITY_LIST:
      return {
        ...state,
        userActivityList: action.payload,
      };
    case USER_RATINGS_LIST:
      return {
        ...state,
        userRatingsList: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
