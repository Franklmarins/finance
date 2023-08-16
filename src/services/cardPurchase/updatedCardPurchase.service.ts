import { prisma } from "../..";
import {
  ICardPurchase,
  ICardPurchaseUpdate,
} from "../../interfaces/cardPurchase.interface";
import { cardPurchaseSchema } from "../../schemas/cardPurchase.schema";

const updateCardPurchaseService = async (
  purchaseId: string,
  purchaseData: ICardPurchaseUpdate
): Promise<ICardPurchase> => {
  const cardPurchase = await prisma.cardPurchase.update({
    where: { id: purchaseId },
    data: { ...purchaseData },
  });

  return cardPurchaseSchema.parse(cardPurchase);
};

export { updateCardPurchaseService };
