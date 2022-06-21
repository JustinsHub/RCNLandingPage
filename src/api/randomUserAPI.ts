import Request from "./helpers/http-randomuser";

class RandomUser {
    static async findRandomUser() {
        try {
            const findUser = await Request.randomUserHttp.get(`/api`)
            return findUser
        } catch (error) {
            return error
        }
    }

    static async findManyRandomUsers(numberOfUsers: number){
        try{
            const findManyUsers = await Request.randomUserHttp.get(`/api/?results=${numberOfUsers}`)
            return findManyUsers
        }catch(error) {
            return error
        }
    }
    
    static async paginatePage(pageNum:number, resultNum:number){
        try {
            const paginatePage = await Request.randomUserHttp.get(`/?page=${pageNum}&results=${resultNum}`)
            return paginatePage
        } catch (error) {
            return error
        }
    }
}

export default RandomUser