import axios from "axios"

import routes from "../constants/routes"
export default{
    async authenticateUser(username,password){
        const res = await axios.post(routes.AUTHENTICATE_USER,{username,password})
        return await res
    }
}