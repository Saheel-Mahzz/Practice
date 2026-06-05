export async function userAction (prevState,formData:FormData){

    const rawData={
        full_name:formData.get('full_name'),
        email:formData.get('email'),
        contact_number:formData.get('contact_number'),
        temporary_address:formData.get('temporary_address'),
        permanent_address:formData.get('permanent_address'),
        state:formData.get('state'),
        city:formData.get('city')
    }
    console.log('rawdata',rawData)
    return {}
}