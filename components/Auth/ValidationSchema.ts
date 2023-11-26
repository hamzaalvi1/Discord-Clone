import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter email address" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().trim().min(1, { message: "Please enter a password" }),
});
