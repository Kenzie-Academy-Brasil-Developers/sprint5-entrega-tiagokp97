import "reflect-metadata";
import "express-async-errors";
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use(handleAppErrorMiddeware);

app.listen(3000, () => {
  console.log("Servidor executando");
});

export default app;
