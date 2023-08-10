import { Request, Response } from "express";
import { ICreditCard, ICreditCards } from "../interfaces/creditCard.interface";
import { createCreditCardService } from "../services/creditCard/createCreditCard.service";
import { retrieveCreditCardsService } from "../services/creditCard/retrieveCreditCards.service";

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

export { createCreditCardController, retrieveCreditCardsController };
