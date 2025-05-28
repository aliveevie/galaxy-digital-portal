import React, { useState } from 'react';
import { MessageCircle, X, Send, User, MessageSquare, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BsWhatsapp } from 'react-icons/bs';

interface SupportChatProps {
  showChatButton: boolean;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
}

const SupportChat: React.FC<SupportChatProps> = ({ showChatButton, isChatOpen, setIsChatOpen }) => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'agent', text: 'Hello! How can I help you today?' },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message
    const newMessages = [
      ...chatMessages,
      { type: 'user', text: chatMessage }
    ];
    
    setChatMessages(newMessages);
    setChatMessage('');
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      setChatMessages([
        ...newMessages,
        { type: 'agent', text: 'Thank you for your message. One of our specialists will get back to you shortly.' }
      ]);
    }, 1000);
  };
  
  return (
    <div 
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
        showChatButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {!isChatOpen ? (
        <button
          onClick={() => setIsChatOpen(true)}
          className="group flex items-center gap-2 bg-[#25D366] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Open WhatsApp support chat"
        >
          <BsWhatsapp className="h-6 w-6 text-white" />
          <span className="text-white font-medium">Chat with us</span>
        </button>
      ) : (
        <div className="w-80 md:w-96 h-96 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-[#25D366] p-3 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BsWhatsapp className="h-5 w-5" />
              <h3 className="font-semibold">WhatsApp Chat</h3>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
            {chatMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'agent' && (
                  <div className="w-8 h-8 rounded-full bg-[#33C3F0] flex items-center justify-center mr-2 flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-[#33C3F0] text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] p-2 rounded-full text-white"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupportChat; 