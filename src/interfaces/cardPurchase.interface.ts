import { z } from "zod";
import {
  cardPurchaseSchema,
  createCardPurchaseSchema,
  returnCardPurchasesSchema,
  updateCardPurchaseSchema,
} from "../schemas/cardPurchase.schema";

type ICardPurchase = z.infer<typeof cardPurchaseSchema>;
type ICardPurchaseRequest = z.infer<typeof createCardPurchaseSchema>;
type ICardPurchaseUpdate = z.infer<typeof updateCardPurchaseSchema>;
type ICardPurchases = z.infer<typeof returnCardPurchasesSchema>;

export {
  ICardPurchase,
  ICardPurchaseRequest,
  ICardPurchaseUpdate,
  ICardPurchases,
};
