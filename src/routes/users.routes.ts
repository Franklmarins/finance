import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  retrieveUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailExists,
  createUserController
);

usersRoutes.get("/:id");

usersRoutes.get("/all", retrieveUsersController);

usersRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateUserSchema),
  ensureIdExistsMiddleware,
  updateUserController
);

usersRoutes.delete("/:id", ensureIdExistsMiddleware, deleteUserController);

export { usersRoutes };
