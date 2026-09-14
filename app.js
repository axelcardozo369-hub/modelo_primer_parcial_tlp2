import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database.js";
import { UserModel } from "./src/models/user.model.js";
import { ProfileModel } from "./src/models/profile.model.js";
import { AssetModel } from "./src/models/asset.model.js";
import { CategoryModel } from "./src/models/category.model.js";
import { UserRouter } from "./src/routes/user.routes.js";
import { ProfileRouter } from "./src/routes/profile.routes.js";
import { validate } from "./src/middlewares/validate.js";
dotenv.config();

console.log("Puerto configurado:", process.env.PORT);
console.log("Base de datos:", process.env.DB_NAME);
console.log("Usuario de DB:", process.env.DB_USER);

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api", UserRouter);
app.use("/api", ProfileRouter);
app.listen(PORT, () => {
  console.log("server corriendo");
  console.log(`server en http://localhost:${PORT}`);
});
