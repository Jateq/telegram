// src/components/ChatList.jsx
import React, { useState } from 'react';

const ChatList = ({ chats, onSelectChat }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeChat, setActiveChat] = useState(null);

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSelectChat = (chatId) => {
        onSelectChat(chatId);
        setActiveChat(chatId);
    };

    return (
        <div className="chat-list">
            <div className='chat-list-header'>
                <div id='top'>
                    <p>Chats</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            fill='#2381cc' d="M280-280h84l240-238-86-86-238 238v86Zm352-266 42-44q6-6 6-14t-6-14l-56-56q-6-6-14-6t-14 6l-44 42 86 86ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/>
                    </svg>
                </div>
                <div className='chat-list-search'>
                    <input
                        type='text'
                        placeholder='Search the chat'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className='list'>
                <ul>
                    {filteredChats.map(chat => (
                        <li
                            key={chat.id}
                            onClick={() => handleSelectChat(chat.id)}
                            className={activeChat === chat.id ? 'active-chat' : ''}
                        >
                            <img src={chat.icon} alt={`${chat.name}'s icon`} className="chat-image-icon"/>

                            <div className="chat-name">{chat.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChatList;
