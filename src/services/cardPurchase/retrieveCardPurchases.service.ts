import { prisma } from "../..";
import { ICardPurchases } from "../../interfaces/cardPurchase.interface";
import { returnCardPurchasesSchema } from "../../schemas/cardPurchase.schema";

const retrieveCardPurchasesService = async (
  cardId: string
): Promise<ICardPurchases> => {
  const cardPurchases = await prisma.cardPurchase.findMany({
    where: { creditCardId: cardId },
  });

  return returnCardPurchasesSchema.parse(cardPurchases);
};

export { retrieveCardPurchasesService };
