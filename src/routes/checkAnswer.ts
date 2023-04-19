import { Router, Request, Response } from 'express';
import { generateTextCompletion } from '../api/openai';
import { validateCheckAnswerRequest } from '../middlewares/validations';

const router: Router = Router();

router.post('/check-answer', validateCheckAnswerRequest, async (req: Request, res: Response) => {
  const question: string = req.body.question;
  const userAnswer: string = req.body.userAnswer;
  const prompt: string = `Essa é a questão: '${question}', e essa a resposta: '${userAnswer}'? Está correto? se não, me ajude a melhorar.`;

  try {
    const answerCheck: string = await generateTextCompletion(prompt);
    res.status(200).json({ answerCheck });
  } catch (error) {
    console.error('Error checking answer:', error);
    res.status(500).json({ error: 'Error checking answer' });
  }
});

export default router;

