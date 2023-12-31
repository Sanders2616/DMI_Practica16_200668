import sequelize from 'sequelize';
import dotenv from "dotenv";

dotenv.config({path :"src/.env"})

const dbConnection = new sequelize(
     process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.HOST,
        port: process.env.DB_PORT,
        dialect: "mysql"
    }
)


export default dbConnection
