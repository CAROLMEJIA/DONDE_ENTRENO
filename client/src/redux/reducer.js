import {
    GET_ACTIVITIES,
    GET_PROFESSIONALS,
    GET_TURNS,
    GET_GYM, INFO,
    FILTER_BY_ACTIVITY,
    FILTER_BY_DAY,
    GET_DETAIL_PROFESSIONAL,
    CLEAN_DETAIL_PROFESSIONAL,
    // POST_COMMENT_AND_RATE
} from "../redux/actions";

const initialState = {
    activities: [],
    activity: [],
    professionals: [],
    detail: [],
    turns: [],
    dayTurn: [],
    gymInfo: [],
}

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                activitiesBackUp: action.payload
            }

        case GET_TURNS:
            return {
                ...state,
                turns: action.payload,
                dayTurn: action.payload
            }

        case GET_GYM, INFO:
            return {
                ...state,
                gymInfo: action.payload
            }

        case GET_PROFESSIONALS:
            return {
                ...state,
                professionals: action.payload
            }

        case FILTER_BY_ACTIVITY:
            state.activities = state.activity
            return {
                ...state,
                activities: action.payload !== 'all' ?
                    state.activities.filter((a) => a.find((e) => (e.name).toLowerCase() === (action.payload).toLowerCase())) :
                    state.activity
            }

        case FILTER_BY_DAY:
            return {
                ...state,
                dayTurn: action.payload != 'all' ?
                    state.turns.filter(turn => turn.date === action.payload) :
                    state.turns
            }

        case GET_DETAIL_PROFESSIONAL:
            return {
                ...state,
                detail: action.payload
            }

        case CLEAN_DETAIL_PROFESSIONAL:
            return {
                ...state,
                detail: []
            }

        // case POST_COMMENT_AND_RATE:
        //     return {
        //         ...state, 
        //         action.payload
        //     }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer