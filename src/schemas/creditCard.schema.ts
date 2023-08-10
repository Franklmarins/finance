import { z } from "zod";

const creditCardSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(127),
  limit: z.string().min(2).max(64),
  invoiceDueDate: z.coerce.date(),
});

const createCreditCardSchema = creditCardSchema.omit({
  id: true,
});

const updateCreditCardSchema = createCreditCardSchema.partial();

const returnCreditCardsSchema = z.array(creditCardSchema);

export {
  creditCardSchema,
  createCreditCardSchema,
  updateCreditCardSchema,
  returnCreditCardsSchema,
};
