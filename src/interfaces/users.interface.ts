import { z } from "zod";
import {
  createUserSchema,
  returnUserSchema,
  returnUsersSchema,
  updateUserSchema,
  userSchema,
} from "../schemas/users.schema";

type IUser = z.infer<typeof userSchema>;
type IUserRequest = z.infer<typeof createUserSchema>;
type IUserResponse = z.infer<typeof returnUserSchema>;
type IUsersResponse = z.infer<typeof returnUsersSchema>;
type IUserUpdate = z.infer<typeof updateUserSchema>;

export { IUser, IUserRequest, IUserResponse, IUserUpdate, IUsersResponse };
