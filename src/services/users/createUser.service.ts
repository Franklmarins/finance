import { prisma } from "../..";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const createUser = await prisma.user.create({
    data: { ...userData },
  });

  const newUser = returnUserSchema.parse(createUser);

  return newUser;
};

export { createUserService };
