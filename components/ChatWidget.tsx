import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';
import { GenerateContentResponse } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Ramdoss\'s AI assistant. Ask me anything about his projects, experience, or design skills.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 1) {
      // Initialize chat session when opened for the first time
      initializeChat();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Create a placeholder for the model response
    setMessages(prev => [...prev, { role: 'model', text: '', isThinking: true }]);

    try {
      const streamResponse = await sendMessageToGemini(userMessage);

      if (streamResponse) {
        let fullText = '';
        
        // Remove thinking state and prepare for streaming update
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          lastMsg.isThinking = false;
          return newHistory;
        });

        for await (const chunk of streamResponse) {
          const c = chunk as GenerateContentResponse;
          const text = c.text;
          if (text) {
            fullText += text;
            setMessages(prev => {
              const newHistory = [...prev];
              newHistory[newHistory.length - 1].text = fullText;
              return newHistory;
            });
          }
        }
      } else {
        setMessages(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].text = "I'm having trouble connecting right now. Please try again later.";
          newHistory[newHistory.length - 1].isThinking = false;
          return newHistory;
        });
      }
    } catch (error) {
       setMessages(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].text = "An error occurred. Please try again.";
          newHistory[newHistory.length - 1].isThinking = false;
          return newHistory;
        });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 flex flex-col overflow-hidden border border-neutral-100 pointer-events-auto transition-all duration-300 animate-in slide-in-from-bottom-5 ring-1 ring-black/5">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-[10px] text-violet-100 flex items-center uppercase tracking-wider font-medium">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-1.5 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-violet-100 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-slate-50 flex flex-col space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-violet-600 text-white rounded-tr-none' 
                      : 'bg-white text-neutral-800 border border-neutral-100 rounded-tl-none'
                  }`}
                >
                  {msg.isThinking ? (
                    <div className="flex space-x-1 items-center h-5 px-1">
                      <div className="w-1.5 h-1.5 bg-current opacity-60 rounded-full animate-bounce delay-0"></div>
                      <div className="w-1.5 h-1.5 bg-current opacity-60 rounded-full animate-bounce delay-150"></div>
                      <div className="w-1.5 h-1.5 bg-current opacity-60 rounded-full animate-bounce delay-300"></div>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-neutral-100 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about my projects..."
              disabled={isLoading}
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all placeholder:text-neutral-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-sm"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white p-4 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
        {!isOpen && <span className="absolute right-full mr-4 bg-white text-neutral-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap border border-neutral-100 text-violet-700">Ask AI about me</span>}
      </button>
    </div>
  );
};

export default ChatWidget;