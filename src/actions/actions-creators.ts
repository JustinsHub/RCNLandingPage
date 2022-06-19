import RandomUser from "../api/randomUserAPI"
import { ActionTypes } from "./action-types"

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

export const paginatePage:any = (page:number, results:number) => {
    return async (dispatch:any) => {
        try {
            const paginate: any = await RandomUser.paginatePage(page, results)
            dispatch(pagination(paginate))
        } catch (error) {
            dispatch(error)
        }
    }
}

// export const storeRandomUser = (user:any) => {
//     return (dispatch:any) => {
//         dispatch(storeUser(user))
//     }
// }
    
export const randomUser = (user:any) => {
    return {
        type: ActionTypes.FETCH_RANDOM_USER,
        user
    }
}
    
export const manyRandomUsers = (users:any) => {
    return {
        type: ActionTypes.FETCH_MANY_RANDOM_USERS,
        users
    }
}

export const pagination = (page:any) => {
    return {
        type: ActionTypes.PAGINATE_PAGE,
        page
    }
}
// export const storeUser = (user:any) => {
//     return {
//         type: ActionTypes.STORE_RANDOM_USER,
//         user
//     }
// }
    

