import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor está rodando!");
});

app.listen(3000, () => {
  console.log("Servidor rodando da porta 3000");
});

export default app;
