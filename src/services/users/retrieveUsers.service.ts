import { prisma } from "../..";
import { IUsersResponse } from "../../interfaces/users.interface";
import { returnUsersSchema } from "../../schemas/users.schema";

const retrieveUsersService = async (): Promise<IUsersResponse> => {
  const users = await prisma.user.findMany();

  const parseUsers = returnUsersSchema.parse(users);

  return parseUsers;
};

export { retrieveUsersService };
