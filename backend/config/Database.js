import { Sequelize } from "sequelize";

const db = new Sequelize('mern-mysql', 'root','',{
    host: 'localhost',
    dialect: 'mysql',
})

export default db;