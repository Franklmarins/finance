import { Request, Response } from "express";
import {
  ICardPurchase,
  ICardPurchaseUpdate,
} from "../interfaces/cardPurchase.interface";
import { createCardPurchaseService } from "../services/cardPurchase/createCardPurchase.service";
import { retrieveCardPurchasesService } from "../services/cardPurchase/retrieveCardPurchases.service";
import { updateCardPurchaseService } from "../services/cardPurchase/updatedCardPurchase.service";
import { deleteCardPurchaseService } from "../services/cardPurchase/deleteCardPurchase.service";

const createCardPurchaseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const purchaseData: ICardPurchase = req.body;
  const cardId: string = req.params.id;

  const newCardPurchase = await createCardPurchaseService(cardId, purchaseData);

  return res.status(201).json(newCardPurchase);
};

const retrieveCardPurchaseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cardId: string = req.params.id;

  const cardPurchases = await retrieveCardPurchasesService(cardId);

  return res.status(200).json(cardPurchases);
};

const updateCardPurchaseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const purchaseId: string = req.params.id;
  const purchaseData: ICardPurchaseUpdate = req.body;

  const purchaseUpdated = await updateCardPurchaseService(
    purchaseId,
    purchaseData
  );

  return res.status(200).json(purchaseUpdated);
};

const deleteCardPurchaseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const purchaseId: string = req.params.id;

  await deleteCardPurchaseService(purchaseId);

  return res.status(204).json();
};

export {
  createCardPurchaseController,
  retrieveCardPurchaseController,
  updateCardPurchaseController,
  deleteCardPurchaseController,
};
