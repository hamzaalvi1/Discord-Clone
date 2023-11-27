import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter email address" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().trim().min(1, { message: "Please enter a password" }),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, { message: "Username is required field" })
      .max(16, { message: "username is less than 16 characters" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email Address is required field" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .trim()
      .nonempty({ message: "Password is required field" })
      .min(8, { message: "Password must be greater than 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"], // path of error
  });
