import { Router } from "express"
import { agregateCategory, idCategory, todayCategory, updateCategory } from "../controllers/category.controllers.js"
import { validate } from "../middlewares/validate.js"
import { agregateCategoryValidator, updateCategoryValidator } from "../middlewares/validations/category.validation.js"
export const CategoryRouter = Router()

CategoryRouter.get("/category",todayCategory)
CategoryRouter.post("/category",agregateCategoryValidator,validate,agregateCategory)
CategoryRouter.get("/category/:id",idCategory)
CategoryRouter.put("/category/:id",updateCategoryValidator,validate,updateCategory)