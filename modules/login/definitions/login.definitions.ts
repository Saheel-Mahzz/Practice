import z from "zod";

export const loginSchema = z.object({
    username:z.string().min(1,'This field cannot be lett empty!'),
    password:z.string().min(1,'This field cannot be left empty!')
})