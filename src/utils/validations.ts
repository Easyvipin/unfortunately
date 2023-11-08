import * as z from "zod";

export const formSchema = z.object({
  fullname: z
    .string()
    .min(2, {
      message: "Please type your full name",
    })
    .regex(/^[\p{L}'-]+(?: [\p{L}'-]+)*$/u, {
      message: "Are you a bot ? dont include symbol please!",
    }),
  profession: z.string({
    required_error: "Please select a profession",
  }),
  bio: z.string().optional(),
  skills: z
    .array(
      z.string({
        required_error: "Please add atleast 3 skills",
      })
    )
    .min(3, {
      message: "Add 3 skills",
    }),
  industry: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one industry.",
  }),
  availability: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one available time.",
    }),
});
