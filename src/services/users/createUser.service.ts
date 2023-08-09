import { hashSync } from "bcryptjs";
import { prisma } from "../..";
import { IUserRequest, IUserResponse } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const hashedPassword = hashSync(userData.password, 10);

  const createUser = await prisma.user.create({
    data: { ...userData, password: hashedPassword },
  });
  const newUser = returnUserSchema.parse(createUser);

  return newUser;
};

export { createUserService };
