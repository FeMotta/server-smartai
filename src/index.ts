import { app, port, host } from './config.ts';
import generateQuestionRouter from './routes/generateQuestion.ts';
import checkAnswerRouter from './routes/checkAnswer.ts';
import { logger } from './logger.ts';

app.use('/api', generateQuestionRouter);
app.use('/api', checkAnswerRouter);

app.listen(port, host, () => {
  logger.info(`Server running at http://${host}:${port}`);
});
