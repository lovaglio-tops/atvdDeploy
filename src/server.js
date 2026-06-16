import express from "express";
import routes from "./routes/routes.js";
import 'dotenv/config';
import cors from 'cors';
import { initializeDatabase } from './configs/Database.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/', routes);

initializeDatabase()
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(
                `Servidor rodando em http://localhost:${process.env.SERVER_PORT}`
            );
        });
    })
    .catch((err) => {
        console.error("Erro ao inicializar o banco:", err);
    });