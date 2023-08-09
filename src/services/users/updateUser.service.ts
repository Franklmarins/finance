import { prisma } from "../..";
import { IUserResponse, IUserUpdate } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

const updateUserService = async (
  id: string,
  userData: IUserUpdate
): Promise<IUserResponse> => {
  const user = await prisma.user.update({
    where: { id },
    data: { ...userData },
  });

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export { updateUserService };
