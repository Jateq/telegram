// src/App.js
import React, { useState } from 'react';
import './App.css';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const [chats, setChats] = useState([
    { id: 1, name: 'John Doe', icon: '👤' },
    { id: 2, name: 'Jane Smith', icon: '👩' },
    // Add more chat users as needed
  ]);

  const [selectedChat, setSelectedChat] = useState(null);

  const onSelectChat = (chatId) => {
    const selectedChat = chats.find(chat => chat.id === chatId);
    setSelectedChat(selectedChat);
  };

  return (
      <div className="app">
        <ChatList chats={chats} onSelectChat={onSelectChat} />
        <ChatWindow selectedChat={selectedChat} />
      </div>
  );
};

export default App;
