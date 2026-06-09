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

    console.log('result',result)


    if(!result?.success){
        console.log('result err',result?.error)
   const fieldErrors = result?.error?.issues.reduce((acc,issue)=>{
const fieldName = issue.path[0]
acc[fieldName] = issue?.message
return acc
   },{})
// const fieldErrors = result.error.flatten().fieldErrors;
// Output direct aauchha: { email: ["Invalid email"], full_name: ["Required"] }

   return {
    message:'Validation failed',
    success:false,
    errors:fieldErrors,
    data:rawData
   }
    }

//     try{
// const response = await api.patch('profile/1/', result.data);

// console.log('respse',response)
        
//         return {
//             message: 'Profile updated successfully!',
//             success: true,
//             data: response.data 
//         }
//     }
//     catch(err){

//         return {
//             message:err?.response?.data?.message || 'Server error occured!',
//             success: false,
//             errors: error.response?.data || {}
//         }
//     }

try {
    const response = await api.patch('profile/1/', result.data);
    
    return {
        message: 'Profile updated successfully!',
        success: true,
        data: response.data 
    };
} catch (err: any) {
    // 1. Django Server Error Matrix (400, 401, 403, 500)
    if (err?.response) {
        return {
            // Django serializer structure matching: array format errors handle matrix
            message: err.response.data?.message || 'Server validation failed.',
            success: false,
            errors: err.response.data || {} 
        };
    }
    
    // 2. Structural Network Error Interface (Server offline, port bad string)
    if (err?.request) {
        return {
            message: 'Server unreachable. Please check your network connection.',
            success: false,
            errors: { global: 'Network connection refused or timed out.' }
        };
    }
    
    // 3. Frontend Internal Crash (Core execution runtime bug protection)
    return {
        message: err.message || 'An unexpected application error occurred.',
        success: false,
        errors: {}
    };
}
    // const response = await api.patch('/profile/1/')
    // console.log('response',response)
    // return {
    //     message:'User Updated Succesfully!',
    //     error:null
    // }
}

