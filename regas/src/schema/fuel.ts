import z from "zod";

export const fuelSchema = z.object({
  amount: z.number(),
  type: z.enum(["GASOLINE", "ETANOL", "DIESEL"]),
});

export type Fuel = z.infer<typeof fuelSchema>;
