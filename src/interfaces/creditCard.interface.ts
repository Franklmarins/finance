import { z } from "zod";
import {
  createCreditCardSchema,
  creditCardSchema,
  returnCreditCardsSchema,
  updateCreditCardSchema,
} from "../schemas/creditCard.schema";

type ICreditCard = z.infer<typeof creditCardSchema>;
type ICreditCardRequest = z.infer<typeof createCreditCardSchema>;
type ICreditCardUpdate = z.infer<typeof updateCreditCardSchema>;
type ICreditCards = z.infer<typeof returnCreditCardsSchema>;

export { ICreditCard, ICreditCardRequest, ICreditCardUpdate, ICreditCards };
