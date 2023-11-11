import z from "zod";

export const signInSchema = z.object({
  name: z.string().max(20, { message: "Must be 10 or fewer characters long" }),
});

export type Driver = z.infer<typeof signInSchema>;
