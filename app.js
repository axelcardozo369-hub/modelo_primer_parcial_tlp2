import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database.js";
import { UserModel } from "./src/models/user.model.js";
import { ProfileModel } from "./src/models/profile.model.js";
import { UserRouter } from "./src/routes/user.routes.js";
import { ProfileRouter } from "./src/routes/profile.routes.js";
import { validate } from "./src/middlewares/validate.js";
import { ClienteModel } from "./src/models/cliente.model.js";
import { ProductModel } from "./src/models/producto.model.js";
import { ProductoRouter } from "./src/routes/producto.routes.js";
import { clienteRouter } from "./src/routes/cliente.routes.js";
import { CategoryRouter } from "./src/routes/category.routes.js";
import { productoCategoryRouter } from "./src/routes/productCategory.routes.js";
dotenv.config();

console.log("Puerto configurado:", process.env.PORT);
console.log("Base de datos:", process.env.DB_NAME);
console.log("Usuario de DB:", process.env.DB_USER);

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api", UserRouter);
app.use("/api", ProfileRouter);
app.use("/api",ProductoRouter)
app.use("/api",clienteRouter)
app.use("/api",CategoryRouter)
app.use("/api",productoCategoryRouter)
app.listen(PORT, () => {
  console.log("server corriendo");
  console.log(`server en http://localhost:${PORT}`);
});
