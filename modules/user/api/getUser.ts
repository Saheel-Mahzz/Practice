import { api } from "@/lib/axios"

export async function getUser (){
    const res = await api.get('/api/user/')
    return res
}