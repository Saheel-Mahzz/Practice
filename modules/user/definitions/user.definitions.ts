import z from "zod";

export const userSchema = z.object({
    full_name:z.string().min(1,'Fullname cannot be left empty!'),
    email:z.string().min(1,'This field cannot be left empty'),
    contact_number:z.string().optional(),
    temporary_address:z.string().optional(),
    permanent_address:z.string().optional(),
    state:z.string().optional(),
    city:z.string().optional()
})

export type TUser = z.infer<typeof userSchema>

export interface UserResponse {
    status:string

}