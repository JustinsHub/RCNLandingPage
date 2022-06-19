import { ActionTypes } from "../actions/action-types"

type Action = Initial

interface Initial {
    type: typeof ActionTypes.FETCH_RANDOM_USER
    users?: []
    error: false
}

const INITIAL_STATE = {
    users: [],
    error: false
}

export const randomUserReducer = (state:any = INITIAL_STATE, action:Action) => {
    switch (action.type) {
        case ActionTypes.FETCH_RANDOM_USER:
            return {
                ...state, 
                user: action.users
            }
        case ActionTypes.FETCH_MANY_RANDOM_USERS: 
            return {
                ...state,
                users: action.users
            }
        case ActionTypes.ERROR:
            return {
                ...state, 
                error: action.error
            }
        default:
            return state
    }
}

