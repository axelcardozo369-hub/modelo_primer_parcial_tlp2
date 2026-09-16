// import { validate } from "../validate.js";
import { UserModel } from "../../models/user.model.js";
import { body, param } from "express-validator";

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
    .bail().custom(async (email) => {
      const emailExiste = await UserModel.findOne({where:{email}})
      if (emailExiste) {
        throw new Error("error, no podes agregar un email que ya va siendo aplicado a otro usuario");
        
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("el password no debe ser vacio")
    .bail(),
];
export const verPorIdUserValidator = [
  param("id").isInt({min:1}).withMessage("debe ser un numero positivo").bail()
  .custom(async (id) => {
    const idUserExiste = await UserModel.findByPk(id)
    if (!idUserExiste) {
      throw new Error("el user que ingresaste no esta en la base de datos ");
      
    }
  })
]
export const deleteUserValidator = [
  param("id").isInt({min:1}).withMessage("debe ser un numero positivo").bail()
  .custom(async (id) => {
    const idUserExiste = await UserModel.findByPk(id)
    if (!idUserExiste) {
      throw new Error("el user que ingresaste no esta en la base de datos ");
      
    }
  }).bail(),
]
export const updateUserValidator = [
   param("id").isInt({min:1}).withMessage("debe ser un numero positivo").bail()
  .custom(async (id) => {
    const idUserExiste = await UserModel.findByPk(id)
    if (!idUserExiste) {
      throw new Error("el user que ingresaste no esta en la base de datos ");
      
    }
  }).bail(),
  body("username").optional().notEmpty().withMessage("el username no debe ser vacio").bail(),
  body("email").optional().isEmail().withMessage("el email debe ser valido").bail().notEmpty().withMessage("el email no debe ser vacio"),
  body("password").notEmpty().withMessage("el passoword no debe ser vacio").bail().isLength().withMessage("el password debe ser almenos 8 digitos") 

]