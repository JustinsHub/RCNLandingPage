import { combineReducers } from "redux";
import { paginatePageReducer } from "./paginateReducer";
import { randomUserReducer } from "./randomUserReducer";

export const reducers = combineReducers({
    fetchUsers: randomUserReducer,
    paginatePage: paginatePageReducer
})
