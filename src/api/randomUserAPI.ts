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
    
}

export default RandomUser