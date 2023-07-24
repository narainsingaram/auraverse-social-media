import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual OpenAI API key

const HiddenPanel = () => {
const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState([]);
const [userInput, setUserInput] = useState('');

const togglePanel = () => {
    setIsOpen(!isOpen);
};

const sendMessage = async (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);

    try {
    const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
        prompt: message,
        max_tokens: 50,
        n: 1,
        },
        {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        },
        }
    );

    const reply = response.data.choices[0].text.trim();
    setMessages([...messages, { text: reply, sender: 'bot' }]);
    } catch (error) {
    // Handle error
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage(userInput);
    setUserInput('');
};

return (
    <div className="bg-red-200 relative">
    <button
        className="fixed right-0 top-1/2 transform -translate-y-1/2 p-4 bg-blue-500 text-white rounded-l-full focus:outline-none"
        onClick={togglePanel}
    >
        {isOpen ? 'Close' : 'Open'}
    </button>

    <div
        className={`fixed right-0 top-0 h-full w-64 bg-gray-100 shadow-lg transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
        <div className="h-full p-4">
        <div className="mb-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
            <div
                key={index}
                className={`py-2 px-4 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
            >
                {message.text}
            </div>
            ))}
        </div>
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            name="message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Type your message..."
            />
            <button
            type="submit"
            className="block mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
            >
            Send
            </button>
        </form>
        </div>
    </div>
    </div>
);
};

export default HiddenPanel;
