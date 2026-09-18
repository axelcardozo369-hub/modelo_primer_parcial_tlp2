import { Router } from "express";
import {validate} from "../middlewares/validate.js"
import { productoCategory, verPorIdRelacionesProductCategory } from "../controllers/productCategory.js";
import { relacionProductoCategoryValidator } from "../middlewares/validations/productoCategory.validation.js";

export const productoCategoryRouter = Router()
productoCategoryRouter.get("/productoCategory",productoCategory)
productoCategoryRouter.get("/productoCategory/:id",relacionProductoCategoryValidator,validate,verPorIdRelacionesProductCategory)