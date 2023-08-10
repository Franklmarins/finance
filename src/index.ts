import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { usersRoutes } from "./routes/users.routes";
import handleAppError from "./errors/handleAppError";
import { PrismaClient } from "@prisma/client";
import { loginRoutes } from "./routes/login.routes";
import { creditCardRoutes } from "./routes/creditCard.routes";

const app: Application = express();
export const prisma = new PrismaClient();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/users/credit-card", creditCardRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando da porta 3000");
});

app.use(handleAppError);

export default app;
