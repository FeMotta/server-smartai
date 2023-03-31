import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const host = process.env.HOST || '192.168.0.11';
const corsOrigin = process.env.CORS_ORIGIN || 'http://192.168.0.11:3000';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

export { app, port, host };
