import { z } from "zod";

export const changePasswordSchema = z
  .object({
    current_password: z.string().min(1, "Current password is required"),
    new_password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
    confirm_password: z.string().min(1, "Please confirm your new password"),
  })
  // Yo path/refine logic le dubai password match garcha
  .refine((data) => data.new_password === data.confirm_password, {
    message: "New passwords do not match",
    path: ["confirm_password"], // Yasले गर्दा exact confirm_password field muni error message dekhaucha
  });

  export type IPassword = z.infer<typeof changePasswordSchema>