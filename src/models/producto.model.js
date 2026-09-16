import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ProductModel = sequelize.define("Producto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('nuevo', 'usado', 'reacondicionado'),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha_ingreso: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});
