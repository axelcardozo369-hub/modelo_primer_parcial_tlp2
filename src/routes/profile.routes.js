import { Router } from "express";
import { todayProfile } from "../controllers/profile.controllers.js";

export const ProfileRouter = Router();

ProfileRouter.get("/profiles", todayProfile);
