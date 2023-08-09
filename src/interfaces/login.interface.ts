import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

interface IToken {
  token: string;
}
type ILogin = z.infer<typeof loginSchema>;

export { ILogin, IToken };
