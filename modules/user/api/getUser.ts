import { api } from "@/lib/axios"
import { TUser } from "../definitions/user.definitions"

export async function getUser (){
    const res = await api.get<TUser>('/api/user/')
    return res
}