import { Router } from "express";
import { agregateProfiles, deleteProfile, todayProfile, updatePRofile, verPorIdProfile } from "../controllers/profile.controllers.js";
import { validate } from "../middlewares/validate.js";
import { AgregateProfileValidator, deleteProfileValidator, updateProfileValidator, verPoriProfileValidator } from "../middlewares/validations/profile.validation.js";
validate
export const ProfileRouter = Router();

ProfileRouter.get("/profiles", todayProfile);
ProfileRouter.get("/profiles/:id", verPoriProfileValidator,validate,verPorIdProfile);
ProfileRouter.post("/profiles",AgregateProfileValidator,validate,agregateProfiles)
ProfileRouter.delete("/profiles/:id",deleteProfileValidator,validate,deleteProfile)
ProfileRouter.put("/profiles/:id",updateProfileValidator,validate,updatePRofile)
