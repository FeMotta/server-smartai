import { Router } from 'express';
import { callOpenaiAPI } from './openai.js';

import app from './config.js';
import { port } from './config.js';

const router = Router();

router.post('/generate-question', async (req, res) => {
  const topic = req.body.topic;
  const prompt = `Crie uma pergunta sobre: ${topic}`;

  try {
    const completion = await callOpenaiAPI(prompt);
    res.json({ question: completion });
  } catch (error) {
    console.error('Erro ao gerar a pergunta:', error);
    res.status(500).json({ error: 'Erro ao gerar a pergunta' });
  }
});

router.post('/check-answer', async (req, res) => {
  const question = req.body.question;
  const userAnswer = req.body.userAnswer;
  const prompt = `A resposta para a pergunta '${question}' é '${userAnswer}'. Isso está correto? Se não, me ajude a melhorar.`;

  try {
    const completion = await callOpenaiAPI(prompt);
    res.json({ answerCheck: completion });
  } catch (error) {
    console.error('Erro ao verificar a resposta:', error);
    res.status(500).json({ error: 'Erro ao verificar a resposta' });
  }
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor intermediário executando na porta ${port}`);
});