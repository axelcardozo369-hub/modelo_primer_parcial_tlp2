import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ClienteModel = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})