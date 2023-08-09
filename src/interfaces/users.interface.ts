import { z } from "zod";
import {
  createUserSchema,
  returnUserSchema,
  returnUsersSchema,
  updateUserSchema,
  userSchema,
} from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof createUserSchema>;
type TUserResponse = z.infer<typeof returnUserSchema>;
type TUsersResponse = z.infer<typeof returnUsersSchema>;
type TUserUpdate = z.infer<typeof updateUserSchema>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate, TUsersResponse };
