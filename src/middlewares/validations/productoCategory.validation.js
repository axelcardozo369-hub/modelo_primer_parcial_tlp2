import { body, param } from "express-validator";
import { ProductoCategoria } from "../../models/productoCategory.model.js";

export  const relacionProductoCategoryValidator = [
    param("id").isNumeric().withMessage("el id debe ser de tipo numerico").bail().isInt({min:1}).withMessage("el id debe ser un numero  positivo").bail().custom(async (id) => {
        const idExiste = await ProductoCategoria.findByPk(id);
        if (!idExiste) {
            throw new Error("el id que buscaste no se encuentra en la  base de datos");
            
        }      
    })
]