"use client";

import React, { useState } from 'react';
import { Mic, Paperclip } from 'lucide-react';

// Custom Brain icon component since the default Brain icon from lucide-react
// might not match the UI in the image exactly
const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path>
    <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
    <path d="M8 10a6 6 0 0 1 12 0v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1z"></path>
    <path d="M7 19a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1H7v-1z"></path>
  </svg>
);

const ChatInterface = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-3xl px-6 py-10">
        {/* Header Section */}
        <div className="mb-16 pl-6">
          <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-2">Good morning, Naph</h1>
          <h2 className="text-5xl font-bold">
            <span className="text-green-500">What's</span>
            <span className="text-teal-400"> the mission </span>
            <span className="text-green-500">today?</span>
          </h2>
        </div>

        {/* Input Area */}
        <div className="rounded-full bg-white dark:bg-gray-950 shadow-lg p-2 flex items-center">
          {/* Text Input */}
          <textarea
            placeholder="Ask me anything"
            className="flex-grow resize-none outline-none border-none px-4 py-2 h-12 bg-transparent text-gray-700 dark:text-gray-300"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows={1}
          />
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2 px-2">
            {/* Paperclip Button */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Paperclip className="w-5 h-5 text-gray-500" />
            </button>
            
          
            
            
            
           
            
            {/* Microphone Button */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Mic className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;