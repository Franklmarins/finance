import { prisma } from "../..";
import {
  ICreditCard,
  ICreditCardRequest,
} from "../../interfaces/creditCard.interface";
import {
  creditCardSchema,
  returnCreditCardsSchema,
} from "../../schemas/creditCard.schema";

const createCreditCardService = async (
  id: string,
  cardData: ICreditCardRequest
): Promise<ICreditCard> => {
  const createCard = await prisma.creditCard.create({
    data: { ...cardData, userId: id },
  });

  return creditCardSchema.parse(createCard);
};

export { createCreditCardService };
