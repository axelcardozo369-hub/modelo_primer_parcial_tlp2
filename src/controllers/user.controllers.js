import { matchedData, validationResult } from "express-validator";
import { UserModel } from "../models/user.model.js";

export const getTodayUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    return res
      .status(201)
      .json({ message: "estos son todos los users", users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error al ver todos los users", error: error.message });
  }
};
export const idUsers = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    // if (!user) {
    //   return res.status(404).josn({ message: "el user no se encuentra" });
    // }
    return res.status(201).json({ message: "user encontrado", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error al ver un user", error: error.message });
  }
};
export const agregateUser = async (req, res) => {
  try {
    const validationData = matchedData(req);
    console.log(validationData);
    const nuevoUser = await UserModel.create(validationData);
    return res
      .status(201)
      .json({ message: "user agregado con exito", nuevoUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error al poder agregar user", error: error.message });
  }
};
export const deleteUser = async (req,res) => {
 try {
  const {id} = req.params;
  const userExiste = await UserModel.findByPk(id);
  await userExiste.destroy()
  return res.status(201).json({message:"user eliminado con exito",userExiste})
 } catch (error) {
  return res.status(500).json({message:"error  al poder eliminar user",error:error.message})
 } 
}
export const updateUser = async (req,res) => {
  try {
    const validationResultBody = matchedData(req,{locations:["body"]})
    const {id} = matchedData(req,{locations:["params"]})
    const userExiste = await UserModel.findByPk(id)

    await userExiste.update(validationResultBody)
    return res.status(201).json({message:"user editado correctamente",userExiste})
  } catch (error) {
    return res.status(500).json({message:"error al poder editar user",error:error.message})
  }
}