import { Sequelize } from "sequelize";

const sequelize = new Sequelize("g_practicas", "root", "nicol225", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
