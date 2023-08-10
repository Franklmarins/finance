import { prisma } from "../..";
import {
  ICreditCard,
  ICreditCardUpdate,
} from "../../interfaces/creditCard.interface";
import { creditCardSchema } from "../../schemas/creditCard.schema";

const updateCreditCardService = async (
  id: string,
  cardData: ICreditCardUpdate
): Promise<ICreditCard> => {
  const card = await prisma.creditCard.update({
    where: { id },
    data: { ...cardData },
  });

  return creditCardSchema.parse(card);
};

export { updateCreditCardService };
