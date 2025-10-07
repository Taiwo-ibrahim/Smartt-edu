// schemas/formSchema.ts
import { z } from "zod";

export const formSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full name is required" }),
    schoolEmail: z.string().email({ message: "Please enter a valid school email address" }),
    accountType: z.string().min(1, { message: "Please select an account type" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters long" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type FormValues = z.infer<typeof formSchema>;
