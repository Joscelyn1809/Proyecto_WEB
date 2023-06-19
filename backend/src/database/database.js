import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

export const sequelize = new Sequelize(
    'sistema_de_renta_db',
    'root',
    'cimarr0n',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectModule: mysql2
    }
)