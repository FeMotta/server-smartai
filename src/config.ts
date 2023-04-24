import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port: number = Number(process.env.PORT) || 3001;
const host: string = process.env.HOST || 'localhost';
const corsOrigin: string = process.env.CORS_ORIGIN || 'https://react-smartai.ue.r.appspot.com';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

export { app, port, host };

