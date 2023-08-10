import { Router } from "express";
import {
  createCreditCardController,
  deleteCreditCardController,
  retrieveCreditCardsController,
  updateCreditCardController,
} from "../controllers/creditCard.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCreditCardSchema } from "../schemas/creditCard.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureCreditCardMiddleware } from "../middlewares/ensureCreditCard.middleware";

const creditCardRoutes = Router();

creditCardRoutes.use(ensureTokenIsValidMiddleware);

creditCardRoutes.post(
  "",
  ensureDataIsValidMiddleware(createCreditCardSchema),
  createCreditCardController
);

creditCardRoutes.get("", retrieveCreditCardsController);

creditCardRoutes.patch(
  "/:id",
  ensureCreditCardMiddleware,
  updateCreditCardController
);

creditCardRoutes.delete(
  "/:id",
  ensureCreditCardMiddleware,
  deleteCreditCardController
);

export { creditCardRoutes };
