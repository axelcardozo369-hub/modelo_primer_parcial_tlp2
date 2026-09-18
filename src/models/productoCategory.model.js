import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ProductoCategoria = sequelize.define('producto_category', {
  producto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'productos',
      key: 'id'
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category',
      key: 'id'
    },
  }
}, {
  tableName: "producto_category",
});