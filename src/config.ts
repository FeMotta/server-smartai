import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port: number = Number(process.env.PORT);
const host: string = process.env.HOST || 'localhost';
const corsOrigin: string = process.env.CORS_ORIGIN || 'https://proud-grass-031684c10.3.azurestaticapps.net/';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

export { app, port, host };

