import { Router } from "express";
import { ProductModel } from "../models/producto.model.js";
import { agregateProducto, deleteProducto, todayProductos, verPorIdPrducto } from "../controllers/producto.controllers.js";
import { validate } from "../middlewares/validate.js";
import { agregateProductoValidator, deleteProductoValidator, verPorIdProductoValidator } from "../middlewares/validations/producto.validation.js";

export const ProductoRouter = Router()

ProductoRouter.post("/productos",agregateProductoValidator,validate,agregateProducto)
ProductoRouter.get("/productos",todayProductos)
ProductoRouter.get("/productos/:id",verPorIdProductoValidator,validate,verPorIdPrducto)
ProductoRouter.delete("/productos/:id",deleteProductoValidator,validate,deleteProducto)