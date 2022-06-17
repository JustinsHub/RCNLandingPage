import { FETCH_RANDOM_USER } from "../actionTypes"


type Action = Initial

interface Initial {
    type: typeof FETCH_RANDOM_USER
    payload: {}
}


export const rootReducer = (state:number, action:Action) => {
    switch (action.type) {
        case FETCH_RANDOM_USER:
            return state
        default:
            return state
    }

}

