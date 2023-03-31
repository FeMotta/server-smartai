import { Router } from 'express';
import { generateTextCompletion } from '../api/openai.js';
import { validateCheckAnswerRequest } from '../middlewares/validations.js';

const router = Router();

router.post('/check-answer', validateCheckAnswerRequest, async (req, res) => {
  const question = req.body.question;
  const userAnswer = req.body.userAnswer;
  const prompt = `Essa é a questão: '${question}', e essa a resposta: '${userAnswer}'? Está correto? se não, me ajude a melhorar.`;

  try {
    const answerCheck = await generateTextCompletion(prompt);
    res.status(200).json({ answerCheck: answerCheck });
  } catch (error) {
    console.error('Error checking answer:', error);
    res.status(500).json({ error: 'Error checking answer' });
  }
});

export default router;
