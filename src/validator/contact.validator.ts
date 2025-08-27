import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Business name is required"),
  
  website: z
    .string()
    .optional()
    .or(z.literal("")), // allow empty string

  instagram: z
    .string()
    .min(1, "Instagram handle is required"),

  phone: z
    .string()
    .min(1, "Phone number is required"),
});
