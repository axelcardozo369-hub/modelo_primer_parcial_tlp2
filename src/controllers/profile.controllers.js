import { matchedData, validationResult } from "express-validator";
import { ProfileModel } from "../models/profile.model.js";

export const todayProfile = async (req, res) => {
  try {
    const profiles = await ProfileModel.findAll();
    return res
      .status(200)
      .json({ message: "estos son todos los perfiles", profiles });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "error al ver todos los profiles",
        error: error.message,
      });
  }
};
export const verPorIdProfile = async (req,res) => {
  try {
    const profile = await ProfileModel.findByPk(req.params.id)
    return res.status(200).json({message:"profile encontrado",profile})
  } catch (error) {
    return res.status(500).json({message:"error al poder ver el profile",error:error.message})
  }
}
export const agregateProfiles = async (req,res) => {
  try {
    const validationData = matchedData(req) 
    const nuevoProfile = await ProfileModel.create(validationData)

    return res.status(201).json({message:"profile agregado con exito",nuevoProfile})
  } catch (error) {
    return res.status(500).json({message:"error al crear profiles",error:error.message})
  }
}
export const deleteProfile = async (req,res) => {
  try {
    const validationData = matchedData(req,{locations:["body"]});
    const {id} = matchedData(req,{locations:["params"]})
    const idProfileExiste = await ProfileModel.findByPk(id)
    await idProfileExiste.destroy()
  return res.status(201).json({message:"profile eliminado con exito",idProfileExiste})

  } catch (error) {
    return res.status(500).json({message:"error al poder eliminar un profile",error:error.message})
  }
}
export const updatePRofile = async (req,res) => {
  try {
    const validationResultBody = matchedData(req,{locations:["body"]})
        const {id} = matchedData(req,{locations:["params"]})
        const ProfileExiste = await ProfileModel.findByPk(id)
    
        await ProfileExiste.update(validationResultBody)
        return res.status(201).json({message:"profile editado correctamente",ProfileExiste})
  } catch (error) {
    return res.status(500).json({message:"error al editar profile",error:error.message})
  }
  
}