import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;
const host = '192.168.0.10'; 

app.use(cors({ origin: 'http://192.168.0.10:3000' }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API!' });
});

export default app;
export { port, host };
