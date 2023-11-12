import { Sequelize } from "sequelize";
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

config(); // Carga las variables de entorno desde el archivo .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(__dirname + '/DigiCertGlobalRootCA.crt.pem')
        }
    }
});

export default db;
