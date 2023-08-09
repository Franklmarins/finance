import { NextFunction, Request, Response } from "express";
import { prisma } from "..";
import AppError from "../errors/appError";

const ensureIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = res.locals.userId;
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) {
    throw new AppError("Users not exists!", 400);
  }

  return next();
};

export { ensureIdExistsMiddleware };
