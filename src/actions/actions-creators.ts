import RandomUser from "../api/randomUserAPI"
import { FETCH_RANDOM_USER, FETCH_MANY_RANDOM_USERS } from "./action-types"

export const fetchRandomUser = () => {
    return async (dispatch:any) => {
        try {
            const { data }:any = await RandomUser.findRandomUser()
            dispatch(randomUser(data))
        } catch (error) {
            dispatch(error)
        }
    }
}
export const fetchManyRandomUsers = (numOfUsers:number) => {
    return async (dispatch:any) => {
        try {
            const { data }:any = await RandomUser.findManyRandomUsers(numOfUsers)
            dispatch(manyRandomUsers(data))
        } catch (error) {
            dispatch(error)
        }
    }
}

    
export const randomUser = (profile:any) => {
    return {
        type: FETCH_RANDOM_USER,
        profile
    }
}
    
export const manyRandomUsers = (profile:any) => {
    return {
        type: FETCH_MANY_RANDOM_USERS,
        profile
    }
}
    

