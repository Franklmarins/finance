import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(127),
  password: z.string().min(4).max(127),
});

export { loginSchema };
