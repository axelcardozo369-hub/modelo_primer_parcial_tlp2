import { body, param } from "express-validator";
import { validate } from "../validate.js";
import { ProfileModel } from "../../models/profile.model.js";

export const AgregateProfileValidator = [

body("legajo").notEmpty().withMessage("el legajo no debe ser vacio").bail(),
body("name").notEmpty().withMessage("el nombre no debe ser vacio").bail(),
body("last_name").notEmpty().withMessage("el apellido no debe ser vacio ").bail(),
body("telephone").notEmpty().withMessage("el telefono no debe ser vacio"),
]
export const verPoriProfileValidator = [
    param("id").isInt({min:1}).withMessage("el id del perfil debe ser un numero positivo").bail().custom(async (id) => {
        const idProfileExiste = await ProfileModel.findByPk(id);
        if (!idProfileExiste) {
            throw new Error("el profile no se encuentra ");
            
        }
    })
]
export const deleteProfileValidator = [
    param("id").isInt({min:1}).withMessage("el id debe ser un numero positivo correspondiente").bail().custom(async (id) => {
        const idProfileExiste = await ProfileModel.findByPk(id)
        if (!idProfileExiste) {
            
            throw new Error("no existe este perfil");
        }
                
    })
]
export const updateProfileValidator = [
    param("id").isInt({min:1}).withMessage("el id debe ser un numero positivo").bail().custom(async (id) => {
        const idProfileExiste = await ProfileModel.findByPk(id)
        if (!idProfileExiste) {
            throw new Error("no se encontró el id del perfil ");
            
        }
    }),
    body("legajo").optional().notEmpty().withMessage("el legajo no debe ser vacio"),
    body("name").optional().notEmpty().withMessage("el name no debe ser vacio").bail(),
    body("last_name").optional().notEmpty().withMessage("el last_name no debe ser vacio").bail()
]