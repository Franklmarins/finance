import { z } from "zod";

const cardPurchaseSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(127),
  purchaseInstallments: z.number().min(1).max(36),
  value: z.string().min(1).max(20),
  category: z.string().min(2).max(127),
  PurchaseDate: z.coerce.date(),
});

const createCardPurchaseSchema = cardPurchaseSchema.omit({
  id: true,
});

const updateCardPurchaseSchema = createCardPurchaseSchema.partial();

const returnCardPurchasesSchema = z.array(cardPurchaseSchema);

export {
  cardPurchaseSchema,
  createCardPurchaseSchema,
  updateCardPurchaseSchema,
  returnCardPurchasesSchema,
};
