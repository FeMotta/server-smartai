import { app, port, host } from './config.js';
import generateQuestionRouter from './routes/generateQuestion.js';
import checkAnswerRouter from './routes/checkAnswer.js';
import { logger } from './logger.js';

app.use('/api', generateQuestionRouter);
app.use('/api', checkAnswerRouter);

app.listen(port, host, () => {
  logger.info(`Server running at http://${host}:${port}`);
});
