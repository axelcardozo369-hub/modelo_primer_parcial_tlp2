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
