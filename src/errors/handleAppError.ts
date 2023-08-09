import { Request, Response, NextFunction } from "express";
import AppError from "./appError";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

const handleAppError = async (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: error.flatten().fieldErrors,
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
  });
};

export default handleAppError;
