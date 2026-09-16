import { matchedData, validationResult } from "express-validator";
import { ProductModel } from "../models/producto.model.js";

export const agregateProducto = async (req,res) => {
    try {
        const validationData = matchedData(req,{locations:["body"]})
        const nuevoProducto = await ProductModel.create(validationData);

        return res.status(201).json({message:"producto agregado con exito",nuevoProducto})
    } catch (error) {
        return res.status(500).json({message:"error al agregar productos",error:error.message
        })
    }
}
export const todayProductos = async (req,res) => {
    try {
        const productos = await ProductModel.findAll()
        return res.status(200).json({message:"estos son todos los productos",productos})
    } catch (error) {
        return res.status(500).json({message:"error al ver todos los productos ",error:error.message})
    }
}
export const verPorIdPrducto = async (req,res) => {
    try {
        const {id} = matchedData(req,{locations:["params"]})
        const idProductoExiste = await ProductModel.findByPk(id);
      return res.status(201).json({message:"producto encontrado",idProductoExiste})
    } catch (error) {
        return res.status(500).json({message:"error al poder ver por id al producto"})
    }
}
export const deleteProducto = async (req,res) => {
    try {
        const {id} = req.params;
        const productoExiste = await ProductModel.findByPk(id)
        await productoExiste.destroy()
        return res.status(201).json({message:"producto borrado correctamente"},productoExiste)
    } catch (error) {
        return res.status(500).json({message:"Error al poder borrar el producto",error:error.message})
    }
}