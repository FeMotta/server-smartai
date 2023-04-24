import axios from 'axios';
import { config } from 'dotenv';
import { logger } from '../logger';

config();

const openaiApiKey = process.env.OPENAI_API_KEY;

export const generateTextCompletion = async (prompt: string) => {
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    const textCompletion = response.data.choices[0].text.trim();
    logger.info(textCompletion);
    return textCompletion;
  } catch (error) {
    logger.error(error as string);
    throw new Error('Generating text completion');
  }
};
