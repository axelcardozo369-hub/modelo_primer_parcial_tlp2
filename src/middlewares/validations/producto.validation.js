import { body, param } from "express-validator";
import { ProductModel } from "../../models/producto.model.js";
export const agregateProductoValidator = [

    body("code").notEmpty().withMessage("el code no debe ser vacio").bail(),
    body("description").notEmpty().withMessage("la description no debe ser vacio").bail(),
    body("brand").notEmpty().withMessage("el brand no debe ser vacio").bail(),
    body("model").notEmpty().withMessage("el model no debe ser vacio").bail(),
    body("price").isInt({min:1}).withMessage("el precio debe ser numeros positivos").bail().notEmpty().withMessage("el price no debe ser vacio").bail().isNumeric().withMessage("el precio debe ser un valor numerico").bail(),
    body("status").notEmpty().withMessage("el status no debe ser vacio").exists().withMessage("el status es obligatorio").isIn(["nuevo","usado","reacondicionado"]).withMessage("el producto debe ser al menos nuevo, usado o reacondicionado, introduce su estado").bail(),
    body("fecha_ingreso").notEmpty().withMessage("la fecha_ingreso no debe ser vacia").bail()
]
export const verPorIdProductoValidator = [
    param("id").isInt({min:1}).withMessage("el id debe ser un numero positivo").bail().custom(async (id) => {
        const idExisteProducto = await ProductModel.findByPk(id)
        if (!idExisteProducto) {
            throw new Error("el id del producto no  existe en la base de datos");
            
        }
    })
]
export const deleteProductoValidator = [
    param("id").isInt({min:1}).withMessage("el id debe ser un numero positivo").bail().custom(async (id) => {
        const idExisteProducto = await ProductModel.findByPk(id)
        if (!idExisteProducto) {
            throw new Error("el id del producto no existe ");
            
        }
    })
]