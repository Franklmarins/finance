import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  retrieveUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailExists,
  createUserController
);

usersRoutes.get("/all", retrieveUsersController);

usersRoutes.use(ensureTokenIsValidMiddleware);

usersRoutes.get("", ensureIdExistsMiddleware, retrieveUserController);

usersRoutes.patch(
  "",
  ensureDataIsValidMiddleware(updateUserSchema),
  ensureIdExistsMiddleware,
  updateUserController
);

usersRoutes.delete("", ensureIdExistsMiddleware, deleteUserController);

export { usersRoutes };
