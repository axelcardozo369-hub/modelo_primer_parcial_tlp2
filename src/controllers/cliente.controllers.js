import { matchedData, validationResult } from "express-validator";
import { ClienteModel } from "../models/cliente.model.js";
export const todayClient = async (req,res) => {
    try {
        const clientes = await ClienteModel.findAll()

        return res.status(200).json({message:"todos los clientes:",clientes})
    } catch (error) {
        return res.status(500).json({message:"error al poder ver todos los clientes",error:error.message})
    }
}
export const idClientes = async (req,res) => {
    try {
        const cliente = await ClienteModel.findByPk(req.params.body);

        return res.status(200).json({message:"cliente encontrado:",cliente})
    } catch (error) {
        return res.status(500).json({message:"error al poder ver el cliente",error:error.message})
    }
}
export const agregateCliente = async (req,res) => {
    try {
        const clientes = matchedData(req,{locations:["body"]})
        const nuevoCliente = await ClienteModel.create(clientes);
        return res.status(201).json({message:"cliente agregado",nuevoCliente})
    } catch (error) {
        return res.status(500).json({message:"error al poder agregar clientes",error:error.message})
    }
}
export const updateClientes = async (req,res) => {
    try {
        const validationResultBody = matchedData(req,{locations:["body"]})
        const {id} = matchedData(req,{locations:["params"]})
        const clienteExiste = await ClienteModel.findByPk(id);

        await clienteExiste.update(validationResultBody)
        return res.status().json({message:"cliente actualizado con exito",clienteExiste})
    } catch (error) {
        return res.status(500).json({message:"error al poder editar cliente",error:error.message})
    }
}
export const deleteCliente = async (req,res) => {
  try {
    const {id} = req.params;
    const clienteExist = await ClienteModel.findByPk(id)

    await clienteExist.destroy()
    return res.status(200).json({message:"cliente borrado con exito",clienteExist})
  } catch (error) {
    return res.status(500).json({message:"error al eliminar clientes",error:error.message})
  }  
}