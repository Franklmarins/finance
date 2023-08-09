import { compare } from "bcryptjs";
import { prisma } from "../..";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";
import AppError from "../../errors/appError";

const updateUserService = async (
  id: string,
  userData: TUserUpdate
): Promise<TUserResponse> => {
  const user = await prisma.user.update({
    where: { id },
    data: { ...userData },
  });

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export { updateUserService };
