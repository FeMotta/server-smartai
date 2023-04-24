import { Router, Request, Response } from 'express';
import { generateTextCompletion } from '../api/openai';
import { validateGenerateQuestionRequest } from '../middlewares/validations';
import { logger } from '../logger';

const router: Router = Router();

let isProcessing: boolean = false;

router.post('/generate-question', validateGenerateQuestionRequest, async (req: Request, res: Response) => {

  if (isProcessing) {
    res.status(400).json({ error: 'Request já esta sendo processado' });
    return;
  }

  isProcessing = true;

  const topic: string = req.body.topic;
  const level: string = req.body.level;

  const prompt: string = `Você pode gerar uma questão que testa o conhecimento do estudante sobre ${topic}? A questão deve ter um nivel de dificuldade ${level} e deve forçar o estudante a demonstrar o conhecimento que ele tem sobre o assunto. Por favor, crie uma questão clara e objetiva e que não seja de multipla escolha.`;
  
  try {
    const generatedQuestion: string = await generateTextCompletion(prompt);
    res.status(200).json({ question: generatedQuestion });
  } catch (error) {
    logger.error(error as string);
    res.status(500).json({ error: 'Erro ao gerar questão' });
  } finally {
    isProcessing = false;
  }
});

export default router;

 
