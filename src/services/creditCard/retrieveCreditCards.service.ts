import { prisma } from "../..";
import { ICreditCards } from "../../interfaces/creditCard.interface";
import { returnCreditCardsSchema } from "../../schemas/creditCard.schema";

const retrieveCreditCardsService = async (
  id: string
): Promise<ICreditCards> => {
  const cards = await prisma.creditCard.findMany({ where: { userId: id } });

  return returnCreditCardsSchema.parse(cards);
};
export { retrieveCreditCardsService };
