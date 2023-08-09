import { NextFunction, Request, Response } from "express";
import { prisma } from "..";
import AppError from "../errors/appError";

const ensureEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const findEmail = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (findEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export { ensureEmailExists };
