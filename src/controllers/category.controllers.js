import { matchedData, validationResult } from "express-validator";
import { CategoryModel } from "../models/category.model.js";

export const todayCategory = async (req,res) => {
    try {
        const categorys = await CategoryModel.findAll()

        return res.status(200).json({message:"categorias encontradas:",categorys})
    } catch (error) {
        return res.status(500).json({message:"error al ver tdas las categorias",error:error.message})
    }
}
export const agregateCategory = async (req,res) => {
    try {
        const validationData = matchedData(req,{locations:["body"]})
        const newCategory = await CategoryModel.create(validationData)
        res.status(201).json({message:"category agregada correctamente", newCategory}

        )
    } catch (error) {
        return res.status(500).json({message:"error al poder agregar una categoria",error:error.message})
    }
}
export const idCategory = async (req,res) => {
    try {
        const category = await CategoryModel.findByPk(req.params.id)
        return res.status(200).json({message:"categoria encontrada",category})
    } catch (error) {
        return res.status(500).json({message:"error al poder ver esa categoria",error:error.message})
    }
}
export const updateCategory = async (req,res) => {
    try {
        const validationResultBody = matchedData(req,{locations:["body"]})
        const {id} = matchedData(req,{locations:["params"]})
        const idCategoryExiste = await CategoryModel.findByPk(id);

        await idCategoryExiste.update(validationResultBody)
        return res.status(201).json({message:"categoria editada",idCategoryExiste})
    } catch (error) {
        return res.status(500).json({message:"error al poder editar la categoria",error:error.message})
    }
}