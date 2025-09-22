import "reflect-metadata";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: "root",
    password: "123456A#",
    database: "celke",
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})