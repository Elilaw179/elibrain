




import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hi! Ask me anything about your school subjects. SirLaw is willing to help.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // ✅ NEW: loading state

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true); // ✅ show typing...

    try {
      const response = await fetch('https://elishaaai-backend.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
        }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { type: 'ai', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { type: 'ai', text: 'Something went wrong. Try again.' }]);
    } finally {
      setLoading(false); // ✅ hide typing...
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 text-lg md:text-xl font-semibold flex justify-center shadow-md">
        Eli-brain AI Assistance
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex max-w-3xl mx-auto ${
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="max-w-[80%] flex items-end space-x-2">
              {msg.type === 'ai' && (
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm">
                  Eli
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.type === 'user'
                    ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                    : 'bg-indigo-100 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
              {msg.type === 'user' && (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">
                  You
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="flex max-w-3xl mx-auto justify-start text-indigo-500 px-4 animate-pulse">
            <span className="text-sm">Thinking and typing......</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200 flex justify-center">
        <div className="w-full max-w-3xl flex items-center space-x-2">
          <textarea
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none resize-none"
            placeholder="Ask a question..."
            rows="1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
