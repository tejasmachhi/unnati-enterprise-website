'use client';

import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.scss';

const QA_PAIRS = [
  {
    keywords: ['hi', 'hello', 'hey', 'greetings'],
    response: "Hello! Welcome to Unnati Enterprise. How can I help you with your industrial safety needs today?"
  },
  {
    keywords: ['product', 'helmet', 'gloves', 'shoes', 'safety', 'equipment'],
    response: "We offer a wide range of industrial safety products including safety helmets, gloves, safety shoes, fall protection gear, and respiratory protection. You can check our Products page for the full catalogue."
  },
  {
    keywords: ['contact', 'phone', 'email', 'address', 'location'],
    response: "You can reach us at +91 99797 38858 or visit our office at D-412, Gokulam Apartment, Nr. Ujala Circle, Ahmedabad. For more details, please visit our Contact page."
  },
  {
    keywords: ['price', 'quote', 'cost', 'bulk'],
    response: "For bulk orders and detailed pricing, please contact our sales team directly at +91 99797 38858 or send an inquiry through our Contact page. We offer competitive pricing for enterprise orders."
  },
  {
    keywords: ['certification', 'isi', 'ce', 'quality'],
    response: "All our safety products are ISI and CE certified, ensuring the highest standards of protection and durability for your workforce."
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Dheyay. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    let bestMatch = null;
    
    // Simple keyword matching
    for (const qa of QA_PAIRS) {
      if (qa.keywords.some(kw => lowerInput.includes(kw))) {
        bestMatch = qa.response;
        break;
      }
    }

    return bestMatch || "Thank you for your message. For specialized inquiries, please contact our support team at +91 99797 38858 or use the Contact form.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate network delay and AI processing
    setTimeout(() => {
      const responseText = getBotResponse(userMessage.text);
      setMessages(prev => [...prev, { id: Date.now(), text: responseText, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <button 
        className={`chatbot-fab ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Chat Assistant"
      >
        <i className="fa-solid fa-comment-dots"></i>
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="header-info">
            <div className="avatar">
              <i className="fa-solid fa-robot"></i>
            </div>
            <div>
              <h3>Dheyay</h3>
              <p className="status-text">
                <span className="online-dot"></span>
                Online | Quick Replies
              </p>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input 
            type="text" 
            placeholder="Type your question..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="send-btn" 
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
