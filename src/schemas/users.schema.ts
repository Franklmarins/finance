import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(127),
  email: z.string().email().max(127),
  password: z.string().min(4).max(127),
});

const createUserSchema = userSchema.omit({
  id: true,
});

const updateUserSchema = createUserSchema.partial();

const returnUserSchema = userSchema.omit({
  password: true,
});

const returnUsersSchema = z.array(returnUserSchema);

export {
  userSchema,
  createUserSchema,
  updateUserSchema,
  returnUserSchema,
  returnUsersSchema,
};
