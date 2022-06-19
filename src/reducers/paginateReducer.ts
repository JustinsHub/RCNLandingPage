import { ActionTypes } from "../actions/action-types"

type Action = Initial

interface Initial {
    type: typeof ActionTypes.PAGINATE_PAGE
    page?: []
    error: false
}

const INITIAL_STATE = {
    page: [],
    error: false
}

export const paginatePageReducer = (state:any = INITIAL_STATE, action:Action) => {
    switch (action.type) {
        case ActionTypes.PAGINATE_PAGE:
            return {
                ...state, 
                page: action.page
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

