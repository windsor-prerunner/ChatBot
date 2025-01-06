import chatGPTHandleErrors from './ChatGPTHandleErrors';

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const getBotResponse = async ( message, options) => {
  try {
    const response = await fetch(REACT_APP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',//'gpt-3.5-turbo',
        messages: [{ role: 'user', content: String(message) }],
        ...options, // Spread any additional options
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('DATA',data);
      return data.choices[0]?.message?.content.trim() || '';
    } else {
      const errorData = await response.json();
      console.error('response error', errorData,response);
      alert(chatGPTHandleErrors(errorData.error))
      return ''
    }
  } catch (error) {
    console.error('error', error);
    throw new Error(error);
  }
};
