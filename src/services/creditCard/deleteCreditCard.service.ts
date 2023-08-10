import { prisma } from "../..";

const deleteCreditCardService = async (id: string): Promise<void> => {
  await prisma.creditCard.delete({ where: { id } });
  return;
};

export { deleteCreditCardService };
