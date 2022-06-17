import { FETCH_RANDOM_USER, ERROR } from "../action-types"

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
        case ERROR:
            return {
                ...state, 
                error: action.error
            }
        default:
            return state
    }

}

