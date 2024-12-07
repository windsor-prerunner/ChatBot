import React, { useState } from 'react';
import { getBotResponse } from '../api/ChatGPTApi';
import optionsConfig from '../api/ChatGPTOptions';
import './App.css';
import ErrorBoundary from './ErrorHandling/ErrorBoundry';

function App () {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  /**
   * @description update the state for both user and bot
   */
  const handleSend = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    //handle bot response
    const botResponse = await getBotResponse(input, optionsConfig.base);
    const botMessage = { sender: 'bot', text: botResponse };
    if(botResponse !== '')setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div className="App">
      <div className="Chat">
        <ErrorBoundary>
          <div className="Chat-messages">
            {messages.map((message, i) => (
              <div key={`message-id-${i.toString()}`}
                   className={message.sender === 'user' ? 'Chat-message-user' : 'Chat-message-bot'}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="Chat-input">
            <input type="text"
                   value={input}
                   onChange={({ target }) => setInput(target.value)}
                   placeholder={'Type Message'}/>
            <button onClick={handleSend}>Send</button>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
