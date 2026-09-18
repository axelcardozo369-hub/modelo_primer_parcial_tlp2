import { body, param } from "express-validator";
import { ClienteModel } from "../../models/cliente.model.js";

export const agregateClienteValidator = [
    body("name").notEmpty().withMessage("el name no debe ser vacio").bail(),
    body("last_name").notEmpty().withMessage("el last_name no debe ser vacio").bail(),
    body("email").notEmpty().withMessage("el email no debe ser vacio").bail().isEmail()
    .withMessage("el email no es valido").bail().custom(async (email) => {
        const emailExiste = await ClienteModel.findOne({email});
        if (emailExiste) {
            throw new Error("error, no puedes ingresar un email que ya se encuentra registrado");
            
        }
    }),
    body("telephone").notEmpty().withMessage("el telephone no debe ser vacio").bail().isLength({min:10,max:10}).withMessage("el telephone debe tener 10 digitos").bail().isNumeric().withMessage("el telephone debe ser entre numeros ").bail(),
    body("seller_id").isInt({min:1}).withMessage("el id del seller_id debe ser numeros positivos").bail().isNumeric().withMessage("el seller_id debe ser en un numero").bail().custom(async (id) => {
        const idExisteCliente = await ClienteModel.findByPk(id);
        if (!idExisteCliente) {
            throw new Error("el id del cliente no existe");
            
        }
    })

]
export const deleteClienteValidator = [
    param("id").isInt({min:1}).withMessage("el id debe ser un numero positivo").bail().isNumeric().withMessage("el id debe ser entre  numeros").bail().custom(async (id) => {
        const idExiste = await ClienteModel.findByPk(id);
        if (!idExiste) {
            throw new Error("el cliente no existe");
            
        }
    })
]
export const idClientesValidator = [

    param("id").isInt({min:1}).withMessage("el id del  cliente debe ser un numero positivo").bail().custom(async (id) => {
        const idExiste = await ClienteModel.findByPk(id) ; 
        if (!idExiste) {
            throw new Error("el id del cliente no existe ");
            
        }
    })
]
export const updateClienteValidator = [
    param("id").isNumeric().withMessage("el id debe ser de valores numericos").bail().isInt({min:1}).withMessage("el id debe ser positivo").bail().custom(async (id) => {
        const idExiste = await ClienteModel.findByPk(id);
        if (!idExiste) {
            throw new Error("no se encontro el id del cliente que quieres editar");
            
        }
    }).bail(),

    body("name").optional().notEmpty().withMessage("el name no debe ser vacio").bail(),
    body("last_name").optional().notEmpty().withMessage("el last_name no debe ser vacio").bail(),
    body("email").optional().notEmpty().withMessage("el email no debe ser vacio").bail().isEmail()
    .withMessage("el email no es valido").bail().custom(async (email) => {
        const emailExiste = await ClienteModel.findOne({email});
        if (emailExiste) {
            throw new Error("error, no puedes ingresar un email que ya se encuentra registrado");
            
        }
    }),
    body("telephone").optional().notEmpty().withMessage("el telephone no debe ser vacio").bail().isLength({min:10,max:10}).withMessage("el telephone debe tener 10 digitos").bail().isNumeric().withMessage("el telephone debe ser entre numeros ").bail(),
    body("seller_id").optional().isInt({min:1}).withMessage("el id del seller_id debe ser numeros positivos").bail().isNumeric().withMessage("el seller_id debe ser en un numero").bail().custom(async (id) => {
        const idExisteCliente = await ClienteModel.findByPk(id);
        if (!idExisteCliente) {
            throw new Error("el id del cliente no existe");
            
        }
    })
]