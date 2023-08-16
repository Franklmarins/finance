import { NextFunction, Request, Response } from "express";
import { prisma } from "..";
import AppError from "../errors/appError";

const ensurePurchaseExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: string = res.locals.userId;
  const purchaseId: string = req.params.id;

  const cardForUser = await prisma.creditCard.findMany({ where: { userId } });
  const searchPurchase = await prisma.cardPurchase.findUnique({
    where: { id: purchaseId },
  });

  const searchCard = cardForUser.find(
    (card) => card.id === searchPurchase?.creditCardId
  );

  if (!searchCard) throw new AppError("Card purchase not exists", 400);

  return next();
};

export { ensurePurchaseExistsMiddleware };
