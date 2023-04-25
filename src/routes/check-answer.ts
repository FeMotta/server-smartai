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
  const apikey: string = req.body.apikey;
  
  const prompt: string = createAnswerPrompt(question, userAnswer);

  try {
    const answerCheck: string = await generateTextCompletion(prompt, apikey);
    res.status(200).json({ answerCheck });
  } catch (error) {
    logger.error(error as string);
    res.status(500).json({ error: 'Error checking answer' });
  } finally {
    isProcessing = false;
  }
});

function createAnswerPrompt(question: string, userAnswer: string): string {
  return `Avalie a seguinte questão e resposta: Questão: "${question}". Resposta do usuário: "${userAnswer}". Está correto? Se não estiver correto, por favor, forneça uma explicação detalhada do erro e sugira uma resposta aprimorada ou correção para a questão ou resposta fornecida.`;
}

export default router;

