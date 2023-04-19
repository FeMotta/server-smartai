import { Request, Response, NextFunction } from 'express';

export const validateGenerateQuestionRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { topic, level } = req.body;
  
  if (!topic) {
    res.status(400).json({ error: 'Tópico não foi encontrado' });
    return;
  }

  if (!level) {
    res.status(400).json({ error: 'Level não foi encontrado' });
    return;
  }

  if (typeof topic !== 'string' || typeof level !== 'string') {
    res.status(400).json({ error: 'O tipo do valor no input não corresponde' });
    return;
  }
  
  next();
};
  
export const validateCheckAnswerRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { question, userAnswer } = req.body;

  if (!question) {
    res.status(400).json({ error: 'Questão não foi encontrada' });
    return;
  }

  if (!userAnswer) {
    res.status(400).json({ error: 'Resposta do usuario não foi encontrada' });
    return;
  }

  if (typeof question !== 'string' || typeof userAnswer !== 'string') {
    res.status(400).json({ error: 'O tipo do valor no input não corresponde' });
    return;
  }

  next();
};

  