import { Router } from "express";
import {
  createCreditCardController,
  retrieveCreditCardsController,
} from "../controllers/creditCard.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCreditCardSchema } from "../schemas/creditCard.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

const creditCardRoutes = Router();

creditCardRoutes.use(ensureTokenIsValidMiddleware);

creditCardRoutes.post(
  "",
  ensureDataIsValidMiddleware(createCreditCardSchema),
  createCreditCardController
);

creditCardRoutes.get("", retrieveCreditCardsController);

export { creditCardRoutes };
