import express from "express";
import {
  createUserController,
  findOneUserController,
  listUsersController,
} from "./controllers/user.controller";
import { createTodoController } from "./controllers/todo.controller";
import { createCheckoutController } from "./controllers/checkout.controller";
import { stripeWebhookController } from "./controllers/stripe.controller";
require("dotenv").config();

const app = express();
const port = 3000;

app.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhookController
);

app.use(express.json());

app.get("/users", listUsersController);
app.get("/users/:userId", findOneUserController);
app.post("/users", createUserController);
app.post("/todos", createTodoController);
app.post("/checkout", createCheckoutController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});
