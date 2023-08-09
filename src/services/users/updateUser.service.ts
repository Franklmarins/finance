import { prisma } from "../..";
import AppError from "../../errors/appError";
import { IUserResponse, IUserUpdate } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

const updateUserService = async (
  id: string,
  userData: IUserUpdate
): Promise<IUserResponse> => {
  if (userData.email) {
    const confirmEmail = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (confirmEmail) throw new AppError("Email alredy exists", 409);
  }
  const user = await prisma.user.update({
    where: { id },
    data: { ...userData },
  });

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export { updateUserService };
