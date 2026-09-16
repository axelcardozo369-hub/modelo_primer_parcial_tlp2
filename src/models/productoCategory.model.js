import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

 export const ProductoCategoria = sequelize.define('ProductoCategoria',{
 producto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'productos',
      key: 'id'
    },
},
        category_id:{
        type:DataTypes.INTEGER,
        references: {
            model: 'categorias',
            key: 'id'
    },
    },


 })
 