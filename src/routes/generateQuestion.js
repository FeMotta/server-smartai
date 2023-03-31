import { Router } from 'express';
import { generateTextCompletion } from '../api/openai.js';
import { validateGenerateQuestionRequest } from '../middlewares/validations.js';

const router = Router();

router.post('/generate-question', validateGenerateQuestionRequest, async (req, res) => {
  const topic = req.body.topic;
  const level = req.body.level;

  const prompt = `Você pode gerar uma questão que testa o conhecimento do estudante sobre ${topic}? A questão deve ter um nivel de dificuldade ${level} e deve forçar o estudante a demonstrar o conhecimento que ele tem sobre o assunto. Por favor, crie uma questão clara e objetiva e que não seja de multipla escolha.`;
  
  try {
    const generatedQuestion = await generateTextCompletion(prompt);
    res.status(200).json({ question: generatedQuestion });
  } catch (error) {
    console.error('Error generating question:', error);
    res.status(500).json({ error: 'Error generating question' });
  }
});

export default router;
 
