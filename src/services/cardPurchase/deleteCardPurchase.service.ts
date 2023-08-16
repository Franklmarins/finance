import { prisma } from "../..";

const deleteCardPurchaseService = async (id: string): Promise<void> => {
  await prisma.cardPurchase.delete({ where: { id } });
  return;
};

export { deleteCardPurchaseService };
