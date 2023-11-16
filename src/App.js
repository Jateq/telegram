// src/App.js
import React, { useState } from 'react';
import './App.css';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

const App = () => {
    const [chats, setChats] = useState([
        { id: 1, name: 'Jateq', icon: 'https://images.unsplash.com/photo-1699296953780-87c772058e6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8' },
        { id: 2, name: 'Uldana', icon: 'https://images.unsplash.com/photo-1699019950419-ffe12ae956c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Aigerim', icon: 'https://plus.unsplash.com/premium_photo-1698046365908-661e92b51332?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'},
        { id: 4, name: 'Askar', icon: 'https://images.unsplash.com/photo-1699006599430-4ba35169ff8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, name: 'Gulnara', icon: 'https://images.unsplash.com/photo-1695653422967-40348437b8ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' },
        { id: 6, name: 'Nurlan', icon: 'https://images.unsplash.com/photo-1699216311931-29dcfce5eca5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 7, name: 'Zhuldyz', icon: 'https://images.unsplash.com/photo-1699567422926-7d716d412a5a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' },
        { id: 8, name: 'Bakyt', icon: 'https://images.unsplash.com/photo-1698907679532-41534c2133b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D' },
        { id: 9, name: 'Madina', icon: 'https://images.unsplash.com/photo-1700049753590-7b2e445cca6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 10, name: 'Sultan', icon: 'https://images.unsplash.com/photo-1699786663101-de7e9de292f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 11, name: 'Katya', icon: 'https://images.unsplash.com/photo-1699800769230-02a5098e78c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 12, name: 'Miras', icon: 'https://images.unsplash.com/photo-1533382957024-a7e2306cdaee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D' },
        { id: 13, name: 'Aru', icon: 'https://images.unsplash.com/photo-1673203176988-151ab9e851c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 14, name: 'Sun', icon: 'https://images.unsplash.com/photo-1676828484325-5778145496a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D'  },
        { id: 15, name: 'Gaya', icon: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 16, name: 'Rus', icon: 'https://images.unsplash.com/photo-1699877905290-aa8c44dd27a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 17, name: 'Dina', icon: 'https://images.unsplash.com/photo-1699002159193-68fd17410f46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D'  },
        { id: 18, name: 'Armi', icon: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D' },
        { id: 19, name: 'Zak', icon: 'https://images.unsplash.com/photo-1699920236512-bc0354d58661?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D'  },
        { id: 20, name: 'Ali', icon: 'https://images.unsplash.com/photo-1522850621283-87a52b7d00e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D' },
        { id: 21, name: 'Yerkosh', icon: 'https://images.unsplash.com/photo-1683009427660-b38dea9e8488?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D' },
        { id: 22, name: 'Zhan', icon: 'https://images.unsplash.com/photo-1699881514606-96d7adcb0f12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D'},

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
