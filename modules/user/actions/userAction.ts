import { api } from "@/lib/axios"
import { userSchema } from "../definitions/user.definitions"

export async function userAction (prevState,formData:FormData){

    const rawData={
        full_name:formData.get('full_name') as string,
        email:formData.get('email') as string,
        contact_number:formData.get('contact_number'),
        temporary_address:formData.get('temporary_address'),
        permanent_address:formData.get('permanent_address'),
        state:formData.get('state'),
        city:formData.get('city')
    }

    const result = userSchema.safeParse(rawData)

    console.log('rsult',result)

    if(!result?.success){
   const fieldErrors = result?.error?.issues.reduce((acc,issue)=>{
const fieldName = issue.path[0]
acc[fieldName] = issue?.message
return acc
   },{})

   return {
    message:'Validation failed',
    success:false,
    errors:fieldErrors,
    data:rawData
   }
    }

    try{
const response = await api.patch('profile/1//', result.data);

console.log('respse',response)
        
        return {
            message: 'Profile updated successfully!',
            success: true,
            data: response.data 
        }
    }
    catch(err){

        return {
            message:err?.response?.data?.message || 'Server error occured!',
            success: false,
            errors: error.response?.data || {}
        }
    }
    // const response = await api.patch('/profile/1/')
    // console.log('response',response)
    // return {
    //     message:'User Updated Succesfully!',
    //     error:null
    // }
}