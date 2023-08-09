import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import {
  IUser,
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from "../interfaces/users.interface";
import { retrieveUsersService } from "../services/users/retrieveUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  const user = await retrieveUserService(userId);

  return res.json(user);
};

const retrieveUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: IUserResponse[] = await retrieveUsersService();

  return res.status(200).json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = res.locals.userId;
  const userData: IUserUpdate = req.body;

  const user = await updateUserService(id, userData);

  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = res.locals.userId;

  await deleteUserService(id);

  return res.status(204).json();
};

export {
  createUserController,
  retrieveUserController,
  retrieveUsersController,
  updateUserController,
  deleteUserController,
};
