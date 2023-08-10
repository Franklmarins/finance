import { NextFunction, Request, Response } from "express";
import { prisma } from "..";
import AppError from "../errors/appError";

const ensureCreditCardMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const cardId: string = req.params.id;
  const userId: string = res.locals.userId;

  const card = await prisma.creditCard.findUnique({
    where: { id: cardId, userId },
  });

  if (!card) throw new AppError("Credit card not exists", 400);

  return next();
};

export { ensureCreditCardMiddleware };
