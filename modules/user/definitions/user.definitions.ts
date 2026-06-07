import z from "zod";

export const userSchema = z.object({
    // full_name:z.string().min(1,'Fullname cannot be left empty!'),
    // full_name:z.string().optional(),
    // email:z.string().min(1,'This field cannot be left empty'),
    // email:z.string().min(1,'This field cannot be left empty').email('Invalid email format!'),
//     // email: z.email({ message: "Invalid email format!" }),
//     email: z
//   .string()
//   .min(1, "This field cannot be left empty") // Khali huda yo chalxa
//   .pipe(z.string().email("Invalid email format!")),
    // full_name:z.string().min(1,'This field cannot be left empty!').regex(/^[A-Za-z]+$/, "Full name alphanumeric ya special characters huna paudaena"),
// full_name: z
//   .string()
//   .min(1, 'This field cannot be left empty!')
// //   .transform(val => val.replace(/\s+/g, ' ').trim())
//   .regex(/^[A-Za-z\s]+$/, "Full name ma alphanumeric ya special characters huna paudaena"),
full_name: z
  .string()
//   .min(1, 'This field cannot be left empty!')
  .regex(/^[A-Za-z\s]+$/, "Full name ma alphanumeric ya special characters huna paudaena")
  .transform(val => val.replace(/\s+/g, ' ').trim())
  .refine(val => val.length > 0, 'This field cannot be left empty!'),
email: z
  .string()
  .min(1, "This field cannot be left empty").toLowerCase()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format!"),
//   contact_number:z.string().optional(),
contact_number:z.string().length(10,'Contact number must be exactly 10 digits').regex(/^\d{10}$/, "Contact number must contain only numbers"),
   temporary_address: z.string().min(3, "Min 3 characters").max(20, "Max 20 characters").optional(),
permanent_address: z.string().min(3, "Min 3 characters").max(20, "Max 20 characters").optional(),
    state:z.string().optional(),
    city:z.string().optional()
})

export type TUser = z.infer<typeof userSchema>

export interface UserResponse {
    status:string
data:TUser
}