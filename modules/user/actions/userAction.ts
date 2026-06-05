import { userSchema } from "../definitions/user.definitions"

export async function userAction (prevState,formData:FormData){

    const rawData={
        full_name:formData.get('full_name') as string,
        email:formData.get('email'),
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
    // console.log('rawdata',rawData)
    return {
        message:'User Updated Succesfully!',
        error:null
    }
}