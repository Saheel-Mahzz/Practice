import z from "zod";

export const userSchema = z.object({
    full_name:z.string().optional(),
    email:z.string().optional(),
    contact_number:z.string().optional(),
    temporary_address:z.string().optional(),
    permanent_address:z.string().optional()
})

export type TUser = z.infer<typeof userSchema>

export interface UserResponse {
    status:string
    
}