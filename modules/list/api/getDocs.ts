import { api } from "@/lib/axios";

export default async function getDocs({search}:{search?:string}){
    const res = await api.get('/docs/',{
        params:{search}
    })
    return res
}