import { api } from "@/lib/axios"
import { TUser } from "../definitions/user.definitions"
import axios from "axios"

export async function getUser (){
    const res = await axios.get<TUser>('http://127.0.0.1:8000/api/profile/1/')
    return res
}