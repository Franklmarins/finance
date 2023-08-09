import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";
import { verify } from "jsonwebtoken";
import { prisma } from "..";

const ensureTokenIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token: string | undefined = req.headers.authorization;

  if (!token) throw new AppError("Missing authorization token", 401);

  token = token.split(" ")[1];

  return verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);
    res.locals.userId = decoded.sub;

    return next();
  });
};

export { ensureTokenIsValidMiddleware };
