// // // "use client";

// // // import React, { useState } from 'react';
// // // import { Mic, Paperclip } from 'lucide-react';

// // // // Custom Brain icon component since the default Brain icon from lucide-react
// // // // might not match the UI in the image exactly
// // // const BrainIcon = () => (
// // //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //     <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path>
// // //     <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
// // //     <path d="M8 10a6 6 0 0 1 12 0v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1z"></path>
// // //     <path d="M7 19a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1H7v-1z"></path>
// // //   </svg>
// // // );

// // // const ChatInterface = () => {
// // //   const [inputValue, setInputValue] = useState('');

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
// // //       <div className="w-full max-w-3xl px-6 py-10">
// // //         {/* Header Section */}
// // //         <div className="mb-16 pl-6">
// // //           <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-2">Good morning, Naph</h1>
// // //           <h2 className="text-5xl font-bold">
// // //             <span className="text-green-500">What's</span>
// // //             <span className="text-teal-400"> the mission </span>
// // //             <span className="text-green-500">today?</span>
// // //           </h2>
// // //         </div>

// // //         {/* Input Area */}
// // //         <div className="rounded-full bg-white dark:bg-gray-950 shadow-lg p-2 flex items-center">
// // //           {/* Text Input */}
// // //           <textarea
// // //             placeholder="Ask me anything"
// // //             className="flex-grow resize-none outline-none border-none px-4 py-2 h-12 bg-transparent text-gray-700 dark:text-gray-300"
// // //             value={inputValue}
// // //             onChange={(e) => setInputValue(e.target.value)}
// // //             rows={1}
// // //           />
          
// // //           {/* Action Buttons */}
// // //           <div className="flex items-center space-x-2 px-2">
// // //             {/* Paperclip Button */}
// // //             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
// // //               <Paperclip className="w-5 h-5 text-gray-500" />
// // //             </button>
            
          
            
            
            
           
            
// // //             {/* Microphone Button */}
// // //             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
// // //               <Mic className="w-5 h-5 text-gray-500" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatInterface;


// // // "use client";

// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Mic, Paperclip, Send } from 'lucide-react';

// // // // Custom Brain icon component
// // // const BrainIcon = () => (
// // //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //     <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path>
// // //     <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
// // //     <path d="M8 10a6 6 0 0 1 12 0v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1z"></path>
// // //     <path d="M7 19a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1H7v-1z"></path>
// // //   </svg>
// // // );

// // // // Message component for conversation bubbles
// // // const Message = ({ text, isUser }) => (
// // //   <div className={`mb-4 ${isUser ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
// // //     <div
// // //       className={`rounded-2xl px-4 py-2 ${
// // //         isUser 
// // //           ? 'bg-green-500 text-white rounded-br-none' 
// // //           : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md'
// // //       }`}
// // //     >
// // //       {text}
// // //     </div>
// // //   </div>
// // // );

// // // const ChatInterface = () => {
// // //   const [inputValue, setInputValue] = useState('');
// // //   const [messages, setMessages] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [sessionId, setSessionId] = useState("user-" + Math.random().toString(36).substring(2, 9));
// // //   const messagesEndRef = useRef(null);
// // //   const textareaRef = useRef(null);

// // //   // Auto-resize the textarea as content grows
// // //   useEffect(() => {
// // //     if (textareaRef.current) {
// // //       textareaRef.current.style.height = 'auto';
// // //       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
// // //     }
// // //   }, [inputValue]);

// // //   // Scroll to the bottom when messages change
// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // //   }, [messages]);

// // //   // Handle send message
// // //   const handleSendMessage = async () => {
// // //     if (!inputValue.trim()) return;
    
// // //     const userMessage = inputValue;
// // //     setInputValue('');
    
// // //     // Add user message to the conversation
// // //     setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    
// // //     // Set loading state
// // //     setIsLoading(true);
    
// // //     try {
// // //       // API endpoint (replace with your actual URL)
// // //       const HOST = '34.31.191.81'; // Use environment variable in production
// // //       const response = await fetch(`http://${HOST}:8000/query`, {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({
// // //           message: userMessage,
// // //           session_id: sessionId
// // //         }),
// // //       });
      
// // //       if (!response.ok) {
// // //         throw new Error('Network response was not ok');
// // //       }
      
// // //       const data = await response.json();
      
// // //       // Add AI response to conversation
// // //       setMessages(prev => [...prev, { text: data.response, isUser: false }]);
// // //     } catch (error) {
// // //       console.error('Error sending message:', error);
// // //       setMessages(prev => [...prev, { 
// // //         text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
// // //         isUser: false 
// // //       }]);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Handle keypress (Enter to send)
// // //   const handleKeyPress = (e) => {
// // //     if (e.key === 'Enter' && !e.shiftKey) {
// // //       e.preventDefault();
// // //       handleSendMessage();
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
// // //       <div className="w-full max-w-3xl px-6 py-10 flex flex-col h-screen">
// // //         {/* Header Section */}
// // //         <div className="mb-6 pl-6">
// // //           <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-2">Good morning, Naph</h1>
// // //           <h2 className="text-4xl font-bold">
// // //             <span className="text-green-500">What's</span>
// // //             <span className="text-teal-400"> the mission </span>
// // //             <span className="text-green-500">today?</span>
// // //           </h2>
// // //         </div>
        
// // //         {/* Messages Container */}
// // //         <div className="flex-grow overflow-y-auto mb-6 px-4">
// // //           {messages.length === 0 ? (
// // //             <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
// // //               <div className="text-center">
// // //                 <BrainIcon className="w-16 h-16 mx-auto mb-4" />
// // //                 <p>Start a conversation with the AI</p>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             messages.map((msg, index) => (
// // //               <Message key={index} text={msg.text} isUser={msg.isUser} />
// // //             ))
// // //           )}
          
// // //           {/* Loading indicator */}
// // //           {isLoading && (
// // //             <div className="flex items-center text-gray-500 dark:text-gray-400">
// // //               <div className="flex space-x-1 ml-2">
// // //                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
// // //                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// // //                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
// // //               </div>
// // //             </div>
// // //           )}
          
// // //           <div ref={messagesEndRef} />
// // //         </div>

// // //         {/* Input Area */}
// // //         <div className="rounded-full bg-white dark:bg-gray-950 shadow-lg p-2 flex items-center">
// // //           {/* Text Input */}
// // //           <textarea
// // //             ref={textareaRef}
// // //             placeholder="Ask me anything"
// // //             className="flex-grow resize-none outline-none border-none px-4 py-2 max-h-32 bg-transparent text-gray-700 dark:text-gray-300"
// // //             value={inputValue}
// // //             onChange={(e) => setInputValue(e.target.value)}
// // //             onKeyDown={handleKeyPress}
// // //             rows={1}
// // //           />
          
// // //           {/* Action Buttons */}
// // //           <div className="flex items-center space-x-2 px-2">
// // //             {/* Paperclip Button */}
// // //             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
// // //               <Paperclip className="w-5 h-5 text-gray-500" />
// // //             </button>
            
// // //             {/* Microphone Button */}
// // //             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
// // //               <Mic className="w-5 h-5 text-gray-500" />
// // //             </button>
            
// // //             {/* Send Button */}
// // //             <button 
// // //               onClick={handleSendMessage}
// // //               disabled={!inputValue.trim() || isLoading}
// // //               className={`w-10 h-10 rounded-full flex items-center justify-center 
// // //                 ${inputValue.trim() && !isLoading 
// // //                   ? 'bg-green-500 hover:bg-green-600 text-white' 
// // //                   : 'bg-gray-200 dark:bg-gray-700 text-gray-500'} 
// // //                 transition-colors`}
// // //             >
// // //               <Send className="w-5 h-5" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatInterface;


// // "use client";

// // import React, { useState, useRef, useEffect } from 'react';
// // import { Mic, Paperclip, Send } from 'lucide-react';

// // // Custom Brain icon component
// // const BrainIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path>
// //     <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
// //     <path d="M8 10a6 6 0 0 1 12 0v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1z"></path>
// //     <path d="M7 19a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1H7v-1z"></path>
// //   </svg>
// // );

// // // Message component for conversation bubbles
// // const Message = ({ text, isUser }) => (
// //   <div className={`mb-4 ${isUser ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
// //     <div
// //       className={`rounded-2xl px-4 py-2 ${
// //         isUser 
// //           ? 'bg-green-500 text-white rounded-br-none' 
// //           : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md'
// //       }`}
// //     >
// //       {text}
// //     </div>
// //   </div>
// // );

// // const ChatInterface = () => {
// //   const [inputValue, setInputValue] = useState('');
// //   const [messages, setMessages] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [sessionId, setSessionId] = useState("user-" + Math.random().toString(36).substring(2, 9));
// //   const messagesEndRef = useRef(null);
// //   const textareaRef = useRef(null);

// //   // Auto-resize the textarea as content grows
// //   useEffect(() => {
// //     if (textareaRef.current) {
// //       textareaRef.current.style.height = 'auto';
// //       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
// //     }
// //   }, [inputValue]);

// //   // Scroll to the bottom when messages change
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   }, [messages]);

// //   // Handle send message
// //   const handleSendMessage = async () => {
// //     if (!inputValue.trim()) return;
    
// //     const userMessage = inputValue;
// //     setInputValue('');
    
// //     // Add user message to the conversation
// //     setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    
// //     // Set loading state
// //     setIsLoading(true);
    
// //     try {
// //       // Option 1: Use environment variables for the API endpoint
// //       // This requires setting NEXT_PUBLIC_API_URL in your .env.local file
// //       const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/chat';
      
// //       // Make request to Next.js API route instead of directly to backend
// //       const response = await fetch(apiUrl, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           message: userMessage,
// //           session_id: sessionId
// //         }),
// //       });
      
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
      
// //       const data = await response.json();
      
// //       // Add AI response to conversation
// //       setMessages(prev => [...prev, { text: data.response, isUser: false }]);
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //       setMessages(prev => [...prev, { 
// //         text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
// //         isUser: false 
// //       }]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Handle keypress (Enter to send)
// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter' && !e.shiftKey) {
// //       e.preventDefault();
// //       handleSendMessage();
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
// //       <div className="w-full max-w-3xl px-6 py-10 flex flex-col h-screen">
// //         {/* Header Section */}
// //         <div className="mb-6 pl-6">
// //           <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-2">Good morning, Naph</h1>
// //           <h2 className="text-4xl font-bold">
// //             <span className="text-green-500">What's</span>
// //             <span className="text-teal-400"> the mission </span>
// //             <span className="text-green-500">today?</span>
// //           </h2>
// //         </div>
        
// //         {/* Messages Container */}
// //         <div className="flex-grow overflow-y-auto mb-6 px-4">
// //           {messages.length === 0 ? (
// //             <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
// //               <div className="text-center">
// //                 <BrainIcon className="w-16 h-16 mx-auto mb-4" />
// //                 <p>Start a conversation with the AI</p>
// //               </div>
// //             </div>
// //           ) : (
// //             messages.map((msg, index) => (
// //               <Message key={index} text={msg.text} isUser={msg.isUser} />
// //             ))
// //           )}
          
// //           {/* Loading indicator */}
// //           {isLoading && (
// //             <div className="flex items-center text-gray-500 dark:text-gray-400">
// //               <div className="flex space-x-1 ml-2">
// //                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
// //                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// //                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
// //               </div>
// //             </div>
// //           )}
          
// //           <div ref={messagesEndRef} />
// //         </div>

// //         {/* Input Area */}
// //         <div className="rounded-full bg-white dark:bg-gray-950 shadow-lg p-2 flex items-center">
// //           {/* Text Input */}
// //           <textarea
// //             ref={textareaRef}
// //             placeholder="Ask me anything"
// //             className="flex-grow resize-none outline-none border-none px-4 py-2 max-h-32 bg-transparent text-gray-700 dark:text-gray-300"
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //             onKeyDown={handleKeyPress}
// //             rows={1}
// //           />
          
// //           {/* Action Buttons */}
// //           <div className="flex items-center space-x-2 px-2">
// //             {/* Paperclip Button */}
// //             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
// //               <Paperclip className="w-5 h-5 text-gray-500" />
// //             </button>
            
// //             {/* Microphone Button */}
// //             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
// //               <Mic className="w-5 h-5 text-gray-500" />
// //             </button>
            
// //             {/* Send Button */}
// //             <button 
// //               onClick={handleSendMessage}
// //               disabled={!inputValue.trim() || isLoading}
// //               className={`w-10 h-10 rounded-full flex items-center justify-center 
// //                 ${inputValue.trim() && !isLoading 
// //                   ? 'bg-green-500 hover:bg-green-600 text-white' 
// //                   : 'bg-gray-200 dark:bg-gray-700 text-gray-500'} 
// //                 transition-colors`}
// //             >
// //               <Send className="w-5 h-5" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatInterface;



// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { Mic, Paperclip, Send } from 'lucide-react';

// // Custom Brain icon component
// const BrainIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path>
//     <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
//     <path d="M8 10a6 6 0 0 1 12 0v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1z"></path>
//     <path d="M7 19a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1H7v-1z"></path>
//   </svg>
// );

// // Message component for conversation bubbles
// const Message = ({ text, isUser }) => (
//   <div className={`mb-4 ${isUser ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
//     <div
//       className={`rounded-2xl px-4 py-2 ${
//         isUser 
//           ? 'bg-green-500 text-white rounded-br-none' 
//           : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md'
//       }`}
//     >
//       {text}
//     </div>
//   </div>
// );

// // Create a proxy function to handle API calls
// async function callChatAPI(message, sessionId) {
//   // VM external IP - change this to your actual VM IP
//   const HOST = '34.31.191.81';
//   const PORT = '8000';
  
//   // For local development, we'll proxy through a Next.js API route if it exists
//   // Otherwise, try direct connection (will likely fail due to CORS in browser)
//   try {
//     // First attempt: Try using relative path which will work if you set up an API route
//     const response = await fetch('/api/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message,
//         session_id: sessionId
//       }),
//     });
    
//     if (response.ok) {
//       return await response.json();
//     }
//   } catch (error) {
//     console.log("API route not available, trying direct connection...");
//   }
  
//   // Second attempt: Try direct connection (will only work if CORS is configured on your backend)
//   try {
//     const response = await fetch(`http://${HOST}:${PORT}/query`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message,
//         session_id: sessionId
//       }),
//     });
    
//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error('API response error');
//     }
//   } catch (error) {
//     console.error("Direct connection failed:", error);
//     throw new Error('Failed to communicate with AI service');
//   }
// }

// const ChatInterface = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState("user-" + Math.random().toString(36).substring(2, 9));
//   const messagesEndRef = useRef(null);
//   const textareaRef = useRef(null);

//   // Auto-resize the textarea as content grows
//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   }, [inputValue]);

//   // Scroll to the bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   // Handle send message
//   const handleSendMessage = async () => {
//     if (!inputValue.trim()) return;
    
//     const userMessage = inputValue;
//     setInputValue('');
    
//     // Add user message to the conversation
//     setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    
//     // Set loading state
//     setIsLoading(true);
    
//     try {
//       // Call the API using our proxy function
//       const data = await callChatAPI(userMessage, sessionId);
      
//       // Add AI response to conversation
//       setMessages(prev => [...prev, { text: data.response, isUser: false }]);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setMessages(prev => [...prev, { 
//         text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
//         isUser: false 
//       }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle keypress (Enter to send)
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="w-full max-w-3xl px-6 py-10 flex flex-col h-screen">
//         {/* Header Section */}
//         <div className="mb-6 pl-6">
//           <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-2">Good morning, Naph</h1>
//           <h2 className="text-4xl font-bold">
//             <span className="text-green-500">What's</span>
//             <span className="text-teal-400"> the mission </span>
//             <span className="text-green-500">today?</span>
//           </h2>
//         </div>
        
//         {/* Messages Container */}
//         <div className="flex-grow overflow-y-auto mb-6 px-4">
//           {messages.length === 0 ? (
//             <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
//               <div className="text-center">
//                 <BrainIcon className="w-16 h-16 mx-auto mb-4" />
//                 <p>Start a conversation with the AI</p>
//               </div>
//             </div>
//           ) : (
//             messages.map((msg, index) => (
//               <Message key={index} text={msg.text} isUser={msg.isUser} />
//             ))
//           )}
          
//           {/* Loading indicator */}
//           {isLoading && (
//             <div className="flex items-center text-gray-500 dark:text-gray-400">
//               <div className="flex space-x-1 ml-2">
//                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
//                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//             </div>
//           )}
          
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input Area */}
//         <div className="rounded-full bg-white dark:bg-gray-950 shadow-lg p-2 flex items-center">
//           {/* Text Input */}
//           <textarea
//             ref={textareaRef}
//             placeholder="Ask me anything"
//             className="flex-grow resize-none outline-none border-none px-4 py-2 max-h-32 bg-transparent text-gray-700 dark:text-gray-300"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyPress}
//             rows={1}
//           />
          
//           {/* Action Buttons */}
//           <div className="flex items-center space-x-2 px-2">
//             {/* Paperclip Button */}
//             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//               <Paperclip className="w-5 h-5 text-gray-500" />
//             </button>
            
//             {/* Microphone Button */}
//             <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//               <Mic className="w-5 h-5 text-gray-500" />
//             </button>
            
//             {/* Send Button */}
//             <button 
//               onClick={handleSendMessage}
//               disabled={!inputValue.trim() || isLoading}
//               className={`w-10 h-10 rounded-full flex items-center justify-center 
//                 ${inputValue.trim() && !isLoading 
//                   ? 'bg-green-500 hover:bg-green-600 text-white' 
//                   : 'bg-gray-200 dark:bg-gray-700 text-gray-500'} 
//                 transition-colors`}
//             >
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatInterface;



"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Mic, Paperclip, Send } from 'lucide-react';

// Custom Brain icon component
const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path>
    <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
    <path d="M8 10a6 6 0 0 1 12 0v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1z"></path>
    <path d="M7 19a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1H7v-1z"></path>
  </svg>
);

// Message component for conversation bubbles
const Message = ({ text, isUser }) => (
  <div className={`mb-4 ${isUser ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
    <div
      className={`rounded-2xl px-4 py-2 ${
        isUser 
          ? 'bg-green-500 text-white rounded-br-none' 
          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md'
      }`}
    >
      {text}
    </div>
  </div>
);

// Create a proxy function to handle API calls
async function callChatAPI(message, sessionId) {
  try {
    // Use the Next.js API route to avoid CORS issues
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        session_id: sessionId
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API response error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw new Error('Failed to communicate with AI service');
  }
}

const ChatInterface = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("user-" + Math.random().toString(36).substring(2, 9));
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-resize the textarea as content grows
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle send message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue;
    setInputValue('');
    
    // Add user message to the conversation
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Call the API using our proxy function
      const data = await callChatAPI(userMessage, sessionId);
      
      // Add AI response to conversation
      setMessages(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keypress (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-3xl px-6 py-10 flex flex-col h-screen">
        {/* Header Section */}
        <div className="mb-6 pl-6">
          <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-2">Good morning, Naph</h1>
          <h2 className="text-4xl font-bold">
            <span className="text-green-500">What's</span>
            <span className="text-teal-400"> the mission </span>
            <span className="text-green-500">today?</span>
          </h2>
        </div>
        
        {/* Messages Container */}
        <div className="flex-grow overflow-y-auto mb-6 px-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
              <div className="text-center">
                <BrainIcon className="w-16 h-16 mx-auto mb-4" />
                <p>Start a conversation with the AI</p>
              </div>
            </div>
          ) : (
            messages.map((msg, index) => (
              <Message key={index} text={msg.text} isUser={msg.isUser} />
            ))
          )}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="flex space-x-1 ml-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="rounded-full bg-white dark:bg-gray-950 shadow-lg p-2 flex items-center">
          {/* Text Input */}
          <textarea
            ref={textareaRef}
            placeholder="Ask me anything"
            className="flex-grow resize-none outline-none border-none px-4 py-2 max-h-32 bg-transparent text-gray-700 dark:text-gray-300"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
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
            
            {/* Send Button */}
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${inputValue.trim() && !isLoading 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'} 
                transition-colors`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;