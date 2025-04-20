import express from "express";
import {
    createUserController,
  deleteUserByIdController,
  getUserByIdController,
  getUsersController,
  updateUserRoleByIdController,
} from "../controller/users.controller.js";

const userRouter = express.Router();

userRouter.get("/users", getUsersController);
userRouter.get("/users/:email", getUserByIdController);
userRouter.post("/users", createUserController);
userRouter.patch("/users/:_id/role", updateUserRoleByIdController);
userRouter.delete("/users/:id", deleteUserByIdController);

export default userRouter;