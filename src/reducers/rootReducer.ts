import { FETCH_RANDOM_USER, ERROR, FETCH_MANY_RANDOM_USERS } from "../actions/action-types"

type Action = Initial

interface Initial {
    type: typeof FETCH_RANDOM_USER
    profile: {}
    error: false
}

const INITIAL_STATE = {
    profile: {},
    error: false
}

export const rootReducer = (state:any = INITIAL_STATE, action:Action) => {
    switch (action.type) {
        case FETCH_RANDOM_USER:
            return {
                ...state, 
                profile: action.profile
            }
        case FETCH_MANY_RANDOM_USERS: 
            return {
                ...state,
                profile: action.profile
            }
        case ERROR:
            return {
                ...state, 
                error: action.error
            }
        default:
            return state
    }
}

