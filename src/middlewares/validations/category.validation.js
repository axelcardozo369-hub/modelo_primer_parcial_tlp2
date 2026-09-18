import { body, param } from "express-validator";
import { CategoryModel } from "../../models/category.model.js";
import { where } from "sequelize";

export const agregateCategoryValidator = [
    body("name").notEmpty().withMessage("el name no debe ser vacio ").bail().isString().withMessage("el name debe ser completamente en string").bail().custom(async (name) => {
        const nameExiste = await CategoryModel.findOne({where:{name}});
        if (nameExiste) {
            throw new Error("el name que quieres agregar ya existe en otra categoria");
            
        }
    }),
    body("description").notEmpty().withMessage("la description no debe ser vacio").bail()
]
export const updateCategoryValidator = [
    param("id").isNumeric().withMessage("el id debe ser entre en numeros").bail().isInt({min:1}).withMessage("el id debe ser un numero positivo").bail().custom(async (id) => {
        const idExiste = await CategoryModel.findByPk(id);
        if (!idExiste) {
            throw new Error("la categoria que buscaste no esta en la base de datos");
            
        }
    }),
    body("name").optional().notEmpty().withMessage("el name no debe ser vacio ").bail().isString().withMessage("el name debe ser completamente en string").bail().custom(async (name) => {
        const nameExiste = await CategoryModel.findOne({where:{name}});
        if (nameExiste) {
            throw new Error("el name que quieres agregar ya existe en otra categoria");
            
        }
    }),
     body("description").notEmpty().withMessage("la description no debe ser vacio").bail()
]