import { z } from "zod";

export const menuFormSchema = z.object({
  name: z.string().nonempty({ message: "Menu Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().min(0, { message: "Delivery time can't be negative" }),

  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size !== 0, {
      message: "Image file cannot be empty",
    }),
});

export type MenuFormSchema = z.infer<typeof menuFormSchema>;
