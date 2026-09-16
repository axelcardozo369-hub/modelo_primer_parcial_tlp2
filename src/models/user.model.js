import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

//mi modelo de user
export const UserModel = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   role: {
    type: DataTypes.ENUM('vendedor', 'administrador'),
    allowNull: false,
    defaultValue: 'vendedor'
  },
});
