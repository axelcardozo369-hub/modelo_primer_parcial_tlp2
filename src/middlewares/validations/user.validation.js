// import { validate } from "../validate.js";
import { UserModel } from "../../models/user.model.js";
import { body } from "express-validator";

export const UserValidator = [
  body("username")
    .notEmpty()
    .withMessage("el username no debe ser vacio")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("el email no debe ser valido")
    .bail()
    .isEmail()
    .withMessage("el email debe ser valido")
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("el password no debe ser vacio")
    .bail(),
];
