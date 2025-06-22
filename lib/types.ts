import {z} from "zod";

export type ContactFormType = z.infer<typeof ContactFormSchema>;

export const ContactFormSchema = z.object({
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(2),
});
