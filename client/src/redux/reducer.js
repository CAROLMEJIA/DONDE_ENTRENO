import {
  GET_ACTIVITIES,
  GET_PROFESSIONALS,
  GET_TURNS,
  GET_GYM_INFO,
  FILTER_BY_ACTIVITY,
  FILTER_BY_DAY,
  /* GET_DETAIL_PROFESSIONAL,
  CLEAN_DETAIL_PROFESSIONAL, */
  // POST_COMMENT_AND_RATE
} from "./actions";

const initialState = {
  activities: [],
  activitiesBackUp: [],
  professionals: [],
  detail: [],
  turns: [],
  dayTurn: [],
  gymInfo: [],
};

const rootReducer = (state = initialState, action) => {
  console.log('reducer', action.payload);
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        activitiesBackUp: action.payload,
      };

    case GET_TURNS:
      return {
        ...state,
        turns: action.payload,
        dayTurn: action.payload,
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
      const copiaB = state.activitiesBackUp
      const filter = 
      action.payload !== "all"
      ? copiaB.find((e) =>
        e.name.toLowerCase() === action.payload.toLowerCase()
      )
      : state.activitiesBackUp;
      return {
        ...state,
        activities: Array.isArray(filter) ? filter:[filter]

      };

    case FILTER_BY_DAY:
      return {
        ...state,
        dayTurn:
          action.payload !== "all"
            ? state.turns.filter((turn) => turn.date === action.payload)
            : state.turns,
      };

    /*  case GET_DETAIL_PROFESSIONAL:
      return {
        ...state,
        detail: action.payload,
      };

    case CLEAN_DETAIL_PROFESSIONAL:
      return {
        ...state,
        detail: [],
      }; */

    // case POST_COMMENT_AND_RATE:
    //     return {
    //         ...state,
    //         action.payload
    //     }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
