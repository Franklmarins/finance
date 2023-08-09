import { verify } from "jsonwebtoken";
import AppError from "../../errors/appError";
import { prisma } from "../..";
import { returnUserSchema } from "../../schemas/users.schema";

const retrieveUserService = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return returnUserSchema.parse(user);
};

export { retrieveUserService };
