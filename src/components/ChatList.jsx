// src/components/ChatList.jsx
import React from 'react';

const ChatList = ({ chats, onSelectChat }) => {
    return (
        <div className="chat-list">
            <ul>
                {chats.map(chat => (
                    <li key={chat.id} onClick={() => onSelectChat(chat.id)}>
                        <div className="chat-icon">{chat.icon}</div>
                        <div className="chat-name">{chat.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
