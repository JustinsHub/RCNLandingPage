import RandomUser from "../api/randomUserAPI"
import { FETCH_RANDOM_USER } from "./action-types"

export const fetchRandomUser = () => {
    return async (dispatch:any) => {
        try {
            const { data }:any = await RandomUser.findRandomUser()
            dispatch(randomUser(data))
        } catch (error) {
            return error
        }
    }
}
    
export const randomUser = (profile:any) => {
    return {
        type: FETCH_RANDOM_USER,
        profile
    }
}
    
