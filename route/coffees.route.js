import express from "express";
import {
  createCoffeesController,
  deleteCoffeeByIdController,
  getCoffeeByIdController,
  getCoffeesController,
  updateCoffeeByIdController,
} from "../controller/coffees.controller.js";

const coffeeRouter = express.Router();

coffeeRouter.get("/coffees", getCoffeesController);
coffeeRouter.get("/coffees/:id", getCoffeeByIdController);
coffeeRouter.post("/coffees", createCoffeesController);
coffeeRouter.put("/coffees/:id", updateCoffeeByIdController);
coffeeRouter.delete("/coffees/:id", deleteCoffeeByIdController);

export default coffeeRouter;
