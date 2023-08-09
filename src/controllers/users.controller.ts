import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { TUser, TUserRequest } from "../interfaces/users.interface";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export { createUserController };
