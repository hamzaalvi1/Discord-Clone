import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required field" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().trim().min(1, { message: "Please enter a password" }),
});
