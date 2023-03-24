import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

export const callOpenaiAPI = async (prompt) => {
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

    const completion = response.data.choices[0].text.trim();
    console.log('completion:', completion);
    return completion;
  } catch (error) {
    console.error('Erro ao fazer a chamada à API GPT-3:', error);
  }
};
