import { z } from "zod";

export const restaurantFormSchema = z.object({
  restaurantName: z
    .string()
    .nonempty({ message: "Restaurant Name is required" }),
  city: z.string().nonempty({ message: "City Name is required" }),
  country: z.string().nonempty({ message: "Country Name is required" }),
  deliveryTime: z
    .number()
    .min(0, { message: "Delivery time can't be negative" }),

  cuisines: z
    .array(z.string())
    .min(0)
    .refine((arr) => arr.length > 0, {
      message: "At least one cuisine is required",
    }),
  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size !== 0, {
      message: "Image file cannot be empty",
    }),
});

export type RestaurantFormSchema = z.infer<typeof restaurantFormSchema>;
