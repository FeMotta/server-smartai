import { Router, Request, Response } from 'express';
import { generateTextCompletion } from '../api/openai';
import { validateGenerateQuestionRequest } from '../middlewares/validations';

const router: Router = Router();

router.post('/generate-question', validateGenerateQuestionRequest, async (req: Request, res: Response) => {
  const topic: string = req.body.topic;
  const level: string = req.body.level;

  const prompt: string = `Você pode gerar uma questão que testa o conhecimento do estudante sobre ${topic}? A questão deve ter um nivel de dificuldade ${level} e deve forçar o estudante a demonstrar o conhecimento que ele tem sobre o assunto. Por favor, crie uma questão clara e objetiva e que não seja de multipla escolha.`;
  
  try {
    const generatedQuestion: string = await generateTextCompletion(prompt);
    res.status(200).json({ question: generatedQuestion });
  } catch (error) {
    console.error('Error generating question:', error);
    res.status(500).json({ error: 'Error generating question' });
  }
});

export default router;

 
