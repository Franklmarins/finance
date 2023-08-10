import { Request, Response } from "express";
import {
  ICreditCard,
  ICreditCardUpdate,
  ICreditCards,
} from "../interfaces/creditCard.interface";
import { createCreditCardService } from "../services/creditCard/createCreditCard.service";
import { retrieveCreditCardsService } from "../services/creditCard/retrieveCreditCards.service";
import { updateCreditCardService } from "../services/creditCard/updateCredtCard.service";
import { deleteCreditCardService } from "../services/creditCard/deleteCreditCard.service";

const createCreditCardController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cardData: ICreditCard = req.body;
  const id: string = res.locals.userId;

  const newCard = await createCreditCardService(id, cardData);

  return res.status(201).json(newCard);
};

const retrieveCreditCardsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userId;

  const cards: ICreditCards = await retrieveCreditCardsService(id);

  return res.status(200).json(cards);
};

const updateCreditCardController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cardId: string = req.params.id;
  const cardData: ICreditCardUpdate = req.body;

  const updatedCard = await updateCreditCardService(cardId, cardData);

  return res.status(200).json(updatedCard);
};

const deleteCreditCardController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  await deleteCreditCardService(id);

  return res.status(204).json();
};

export {
  createCreditCardController,
  retrieveCreditCardsController,
  updateCreditCardController,
  deleteCreditCardController,
};
