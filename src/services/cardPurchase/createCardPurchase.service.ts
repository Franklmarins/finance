import { prisma } from "../..";
import {
  ICardPurchase,
  ICardPurchaseRequest,
} from "../../interfaces/cardPurchase.interface";
import { cardPurchaseSchema } from "../../schemas/cardPurchase.schema";

const createCardPurchaseService = async (
  cardId: string,
  purchaseData: ICardPurchaseRequest
): Promise<ICardPurchase> => {
  const createCardPurchase = await prisma.cardPurchase.create({
    data: { ...purchaseData, creditCardId: cardId },
  });

  return cardPurchaseSchema.parse(createCardPurchase);
};

export { createCardPurchaseService };
