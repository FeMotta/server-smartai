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
  const apikey: string = req.body.apikey;

  const prompt: string = createQuestionPrompt(topic, level);
  
  try {
    const generatedQuestion: string = await generateTextCompletion(prompt, apikey);
    res.status(200).json({ question: generatedQuestion });
  } catch (error) {
    logger.error(error as string);
    res.status(500).json({ error: 'Erro ao gerar questão' });
  } finally {
    isProcessing = false;
  }
});

function createQuestionPrompt(topic: string, level: string): string {
  return `Por favor, crie uma questão de qualidade que teste o conhecimento do estudante sobre o tema "${topic}". A questão deve ter um nível de dificuldade "${level}" e deve forçar o estudante a demonstrar o conhecimento que ele tem sobre o assunto. A questão deve ser clara, objetiva, não ser de múltipla escolha e nem possuir figuras ou imagens além de não prover a resposta ao usuario. Certifique-se de que a resposta esteja correta, bem fundamentada e livre de erros ou desinformação. Além disso, verifique a gramática e a ortografia antes de apresentar a resposta final.`;
}

export default router;