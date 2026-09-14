import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const AssetModel = sequelize.define("Asset", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  inventory_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("good", "regular", "bad", "out_of_service"),
    allowNull: false,
  },
  acquisition_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  acquisition_value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  responsible_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
