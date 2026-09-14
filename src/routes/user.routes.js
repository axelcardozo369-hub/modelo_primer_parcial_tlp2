import { Router } from "express";
import {
  agregateUser,
  getTodayUsers,
  idUsers,
} from "../controllers/user.controllers.js";
import { validate } from "../middlewares/validate.js";
import { UserValidator } from "../middlewares/validations/user.validation.js";
export const UserRouter = Router();

UserRouter.get("/users", getTodayUsers);
UserRouter.get("/users/:id", idUsers);
UserRouter.post("/users", UserValidator, validate, agregateUser);
