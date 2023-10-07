import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Notes = db.define('notes',{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    note:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{freezeTableName: true});

export default Notes;

(async()=>{
    await db.sync();
})();