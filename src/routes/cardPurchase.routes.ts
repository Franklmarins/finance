import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import {
  createCardPurchaseController,
  deleteCardPurchaseController,
  retrieveCardPurchaseController,
  updateCardPurchaseController,
} from "../controllers/cardPurchase.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCardPurchaseSchema } from "../schemas/cardPurchase.schema";
import { ensureCreditCardMiddleware } from "../middlewares/ensureCreditCard.middleware";
import { ensurePurchaseExistsMiddleware } from "../middlewares/ensurePurchaseExists.middleware";

const cardPurchaseRoutes = Router();

cardPurchaseRoutes.use(ensureTokenIsValidMiddleware);

cardPurchaseRoutes.post(
  "/:id",
  ensureDataIsValidMiddleware(createCardPurchaseSchema),
  ensureCreditCardMiddleware,
  createCardPurchaseController
);
cardPurchaseRoutes.get(
  "/:id",
  ensureCreditCardMiddleware,
  retrieveCardPurchaseController
);
cardPurchaseRoutes.patch(
  "/:id",
  ensurePurchaseExistsMiddleware,
  updateCardPurchaseController
);
cardPurchaseRoutes.delete(
  "/:id",
  ensurePurchaseExistsMiddleware,
  deleteCardPurchaseController
);

export { cardPurchaseRoutes };
