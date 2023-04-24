import { app, port, host } from './config';
import generateQuestionRouter from './routes/generate-question';
import checkAnswerRouter from './routes/check-answer';
import { logger } from './logger';

app.use('/api', generateQuestionRouter);
app.use('/api', checkAnswerRouter);

app.get('/', (req, res) => {
  return res.json({
    message: 'SmartAI API',
  })
});

app.listen(port, host, () => {
  logger.info(`Server running at http://${host}:${port}`);
});
