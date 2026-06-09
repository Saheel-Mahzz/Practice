import { api } from "@/lib/axios"
import { changePasswordSchema } from "../definitions/changePassword.definitions"
import { success } from "zod"

export async function changePasswordAction(prevState,formData:FormData){
    const rawData ={
        current_password:formData.get('current_password') || '',
        new_password:formData.get('new_password') || '',
        confirm_password:formData.get('confirm_password') || ''
    }
    const temp_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzgxMTA2NDAxLCJpYXQiOjE3ODEwMjAwMDEsImp0aSI6Ijg1MmNkMmU3YTM1NTQ3NTc5YjZkODI0MzY3Njk1OTAwIiwidXNlcl9pZCI6IjIifQ.IF3bka84GpF8UJaBvKp1jsHrLGdaBLgSdwQpkr5BUbI'

    const result = changePasswordSchema.safeParse(rawData)
//     err ZodError: [
//   {
//     "origin": "string",
//     "code": "too_small",
//     "minimum": 1,
//     "inclusive": true,
//     "path": [
//       "current_password"
//     ],
//     "message": "Current password is required"
//   },
{current_password:'Cuurene passsord is '}


    if(!result.success){
        // console.log('err',result.error?.issues)
        const errors = result?.error?.issues?.reduce((acc,curr)=>{
        acc[curr?.path] = curr?.message
        return acc
        },{})
        console.log('errors',errors)
        return{
            data:rawData,
            success:false,
            error:errors
        }
    }
    console.log('result',result)
    try{
const res = await api.patch('/change-password/',rawData,{
    headers:{
        Authorization: `Bearer ${temp_token}`
    }
})
return{
    data:rawData,
    success:true,
    error:null
}

console.log('api response',res)
    }
    catch(err){
        return {
            data:rawData,
            success:false,
            error:err?.err
        }
    }
    return {}
}