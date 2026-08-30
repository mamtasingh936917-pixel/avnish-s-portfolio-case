import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+]?[0-9\s()-]{7,20}$/, "Please enter a valid phone number"),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Please add a subject").max(200),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
