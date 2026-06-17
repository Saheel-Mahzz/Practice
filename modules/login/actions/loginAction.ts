import { api } from "@/lib/axios"
import { loginSchema } from "../definitions/login.definitions"

export async  function  logInAction(prevState,formData:FormData){
    const rawData={
        username:formData?.get('username'),
        password:formData?.get('password')
    }

    const result = loginSchema.safeParse(rawData)
    // console.log(result)
    if(!result?.success){
        console.log('errr',result?.error?.issues)

        const fieldErr = result?.error?.issues?.reduce((acc,curr)=>{

            acc[curr?.path] = curr?.message
return acc;
        },{})
        console.log('field err',fieldErr)
        return{
            data:rawData,
            success:false,
            message:'Validation Error!',
            error:fieldErr
        }
    }

try{
const response = await api.post('/login/',rawData)
return {
    data:response?.data,
    success:true,
    message:'Login Successfull',
    error:null
}
console.log('response from server',response)
}
catch(err){
console.log('err from server',err)
console.log('Real backend error:', err.response)
    const serverError = err.response?.data?.detail || err.response?.data || 'Something went wrong!'
    return {
        data:rawData || null,
        success:false,
     message: typeof serverError === 'string' ? serverError : 'Invalid credentials!',
      error: err.response?.data || null // exact field errors from backend if any
    }
}
}