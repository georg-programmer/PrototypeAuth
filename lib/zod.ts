import { object, string } from "zod"
 

export const signInSchema = object({
  email: string()
    .min(1, "Email is required"),
  password: string()
  .min(1, "Password is required")
  .max(32, "Password must be less than 32 characters")
})