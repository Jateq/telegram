// src/components/ChatWindow.jsx
import React from 'react';

const ChatWindow = ({ selectedChat }) => {
    return (
        <div className="chat-window">
            {selectedChat ? (
                <div>
                    <div className="chat-header">{selectedChat.name}</div>
                    <div className="chat-messages">{/* Display chat messages here */}</div>
                </div>
            ) : (
                <div className="empty-chat">Select a chat to start messaging</div>
            )}
        </div>
    );
};

export default ChatWindow;
