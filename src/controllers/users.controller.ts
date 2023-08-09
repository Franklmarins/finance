import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdate,
} from "../interfaces/users.interface";
import { retrieveUsersService } from "../services/users/retrieveUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const retrieveUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUserResponse[] = await retrieveUsersService();

  return res.status(200).json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const userData: TUserUpdate = req.body;

  const user = await updateUserService(id, userData);

  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;

  await deleteUserService(id);

  return res.status(204).json();
};

export {
  createUserController,
  retrieveUsersController,
  updateUserController,
  deleteUserController,
};
