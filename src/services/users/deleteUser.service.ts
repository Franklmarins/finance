import { prisma } from "../..";

const deleteUserService = async (id: string): Promise<void> => {
  await prisma.user.delete({ where: { id } });
  return;
};

export { deleteUserService };
