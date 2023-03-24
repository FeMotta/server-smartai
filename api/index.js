import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.post('/api/generate-question', async (req, res) => {
  const topic = req.body.topic; // <-- Recebe o tópico da pergunta
  const level = req.body.level; // <-- Recebe o nível de dificuldade da pergunta

  if (topic == 'matematica') {
    prompt = `Crie uma conta no nivel: ${level}, com o tema: ${topic}`; // <-- Cria o prompt para a API GPT-3
  } else {
    prompt = `Crie uma pergunta no nivel: ${level}, com o tema: ${topic}`; // <-- Cria o prompt para a API GPT-3
  }

  console.log(req.body); 

  try {
    const completion = await callOpenaiAPI(prompt); // <-- Chama a API GPT-3
    res.json({ question: completion }); // <-- Retorna a pergunta gerada
  } catch (error) {
    console.error('Erro ao gerar a pergunta:', error);
    res.status(500).json({ error: 'Erro ao gerar a pergunta' });
  }
});

app.post('/api/check-answer', async (req, res) => {
  const question = req.body.question // <-- Recebe a pergunta
  const userAnswer = req.body.userAnswer; // <-- Recebe a resposta do usuário
  const prompt = `A resposta para a pergunta '${question}' é '${userAnswer}'. Isso está correto? Se não, me ajude a melhorar.`; // <-- Cria o prompt para a API GPT-3

  console.log(req.body);    

  try {
    const completion = await callOpenaiAPI(prompt); // <-- Chama a API GPT-3
    res.json({ answerCheck: completion }); // <-- Retorna a resposta da API GPT-3
  } catch (error) {
    console.error('Erro ao verificar a resposta:', error);
    res.status(500).json({ error: 'Erro ao verificar a resposta' });
  }
});

app.listen(port, () => {
  console.log(`Servidor intermediário executando na porta ${port}`);
});
