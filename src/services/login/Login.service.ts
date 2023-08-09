import { compare } from "bcryptjs";
import { prisma } from "../..";
import AppError from "../../errors/appError";
import { ILogin, IToken } from "../../interfaces/login.interface";
import { sign } from "jsonwebtoken";

const loginService = async (loginData: ILogin): Promise<IToken> => {
  const user = await prisma.user.findUnique({
    where: { email: loginData.email },
  });

  if (!user) throw new AppError("Invalid email or password!", 401);

  const passwordCompare: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!passwordCompare) throw new AppError("Invalid email or password!", 401);

  const token: string = sign(
    {
      email: user.email,
    },
    "scretkey",
    { expiresIn: "24h", subject: String(user.id) }
  );

  return { token };
};

export { loginService };
