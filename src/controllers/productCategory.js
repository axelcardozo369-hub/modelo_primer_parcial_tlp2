import { ProductoCategoria } from "../models/productoCategory.model.js";

export const productoCategory = async (req,res) => {
    try {
        const relacionProCategory = await ProductoCategoria.findAll();

        return res.status(200).json({message:"estos son las relaciones de productos con categorias",relacionProCategory})
    } catch (error) {
        return res.status(500).json({message:"error al poder ver las relaciones de productos con categorias",error:error.message})
    }
}
export const verPorIdRelacionesProductCategory = async (req,res) => {
    try {
        const idRelacion = await ProductoCategoria.findByPk(req.params.id)
        return res.status(200).json({message:"relacion encontrada:",idRelacion})
    } catch (error) {
        return res.status(500).json({message:"error al poder ver la relacionada por su id",error:error.message})
    }
}