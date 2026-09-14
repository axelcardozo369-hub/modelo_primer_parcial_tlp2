import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("modelo_examen", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
  dialectOptions: {
    timezone: "local",
    dateStrings: true,
  },
});
export const probarDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("conexion de base de datos exitosa");
  } catch (error) {
    console.log("error al conectar con la base de datos:", error.message);
  }
};
probarDatabase();
