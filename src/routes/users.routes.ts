import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema } from "../schemas/users.schema";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailExists,
  createUserController
);

export { usersRoutes };
