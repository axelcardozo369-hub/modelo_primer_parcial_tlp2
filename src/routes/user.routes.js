import { Router } from "express";
import {
  agregateUser,
  deleteUser,
  getTodayUsers,
  idUsers,
  updateUser,
} from "../controllers/user.controllers.js";
import { validate } from "../middlewares/validate.js";
import { deleteUserValidator, updateUserValidator, UserValidator, verPorIdUserValidator } from "../middlewares/validations/user.validation.js";
export const UserRouter = Router();

UserRouter.get("/users", getTodayUsers);
UserRouter.get("/users/:id", verPorIdUserValidator,validate,idUsers);
UserRouter.post("/users", UserValidator, validate, agregateUser);
UserRouter.delete("/users/:id",deleteUserValidator,validate,deleteUser)
UserRouter.put("/users/:id",updateUserValidator,validate,updateUser)