export const validateGenerateQuestionRequest = (req, res, next) => {
    const { topic, level } = req.body;
  
    if (!topic) {
      return res.status(400).json({ error: 'Tópico não foi encontrado' });
    }
  
    if (!level) {
      return res.status(400).json({ error: 'Level não foi encontrado' });
    }
  
    if (typeof topic !== 'string' || typeof level !== 'string') {
      return res.status(400).json({ error: 'O tipo do valor no input não corresponde' });
    }
  
    next();
  };
  
  export const validateCheckAnswerRequest = (req, res, next) => {
    const { question, userAnswer } = req.body;
  
    if (!question) {
      return res.status(400).json({ error: 'Questão não foi encontrada' });
    }
  
    if (!userAnswer) {
      return res.status(400).json({ error: 'Resposta do usuario não foi encontrada' });
    }
  
    if (typeof question !== 'string' || typeof userAnswer !== 'string') {
      return res.status(400).json({ error: 'O tipo do valor no input não corresponde' });
    }
  
    next();
};
  