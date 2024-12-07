function chatGPTHandleErrors(error) {
  console.error('ERROR', error);

  //Extract specific error message if available
  if(error?.message)  return error?.message ;
//https://platform.openai.com/docs/guides/error-codes
  switch (error?.response?.status) {
    case 400:
      return  'Bad request. Please check the data you are sending.';
    case 401:
      return  'Unauthorized. Please check your API key.';
    case 403:
      return  'Forbidden. You do not have access to this resource.';
    case 404:
      return  'Resource not found. Please check the endpoint URL.';
    case 429:
      return  'Rate limit exceeded. Please try again later.';
    case 500:
      return  'Internal server error. Please try again later.';
    default:
      return 'An unknown error occurred. Please try again.';
  }
}

export default chatGPTHandleErrors;
