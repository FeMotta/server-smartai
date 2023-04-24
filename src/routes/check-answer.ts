import { Router, Request, Response } from 'express';
import { generateTextCompletion } from '../api/openai';
import { validateCheckAnswerRequest } from '../middlewares/validations';
import { logger } from '../logger';

const router: Router = Router();

let isProcessing: boolean = false;

router.post('/check-answer', validateCheckAnswerRequest, async (req: Request, res: Response) => {

  if (isProcessing) {
    res.status(400).json({ error: 'Request já esta sendo processado' });
    return;
  }

  isProcessing = true;

  const question: string = req.body.question;
  const userAnswer: string = req.body.userAnswer;
  const prompt: string = `Essa é a questão: '${question}', e essa a resposta: '${userAnswer}'? Está correto? se não, me ajude a melhorar.`;

  try {
    const answerCheck: string = await generateTextCompletion(prompt);
    res.status(200).json({ answerCheck });
  } catch (error) {
    logger.error(error as string);
    res.status(500).json({ error: 'Error checking answer' });
  } finally {
    isProcessing = false;
  }
});

export default router;

