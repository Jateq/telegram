import React, { useEffect, useState } from 'react';

const ChatWindow = ({ selectedChat }) => {
    const [randomWord, setRandomWord] = useState(null);
    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getFormattedTime());
        }, 1000); // Update every second

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    function getFormattedTime() {
        const currentDate = new Date();
        return currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
    //                 method: 'GET',
    //                 headers: {
    //                     'X-Api-Key': process.env.REACT_APP_X_API, // Replace with your API key
    //                     'Content-Type': 'application/json',
    //                 },
    //             });
    //
    //             if (!response.ok) {
    //                 throw new Error(`Network response was not ok: ${response.statusText}`);
    //             }
    //
    //             const result = await response.json();
    //             setRandomWord(result);
    //         } catch (error) {
    //             console.error('Error fetching data:', error.message);
    //         }
    //     };
    //
    //     fetchData();
    // }, []); // The empty dependency array ensures that the effect runs once on mount

    return (
        <div className="chat-window">
            {selectedChat ? (
                <div className='window'>
                    <div className="chat-header">
                        <div className='info'>
                            <img src={selectedChat.icon} alt={`${selectedChat.name}'s icon`}
                                 className="window-chat-image-icon"/>
                            <div>
                                <div className='user-info'>{selectedChat.name}</div>
                                <p>last seen recently</p>
                            </div>
                        </div>
                        <div className='icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                                <path fill='#4c91c7' d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                                <path fill='#4c91c7' d="M784-120 532-372q-30 26-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                                <path fill='#4c91c7' d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
                            </svg>
                        </div>




                    </div>
                    <div className="chat-messages">
                        <div className="message-container">


                        <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p className='text'>Hello here</p>
                        </div>
      <div className='user'>
                            <p>Hello here</p>
                        </div>
                        <div className='user'>
                            <p>Hellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd hereHellofd here</p>
                        </div>
                        </div>
                    </div>
                    <div className="chat-footer">
                        <div >
                            <svg id='icon' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="26">
                                <path
                                    fill='#9d9d9d' d="M460-80q-92 0-156-64t-64-156v-420q0-66 47-113t113-47q66 0 113 47t47 113v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-380h60v380q0 17 11.5 28.5T460-300q17 0 28.5-11.5T500-340v-380q0-42-29-71t-71-29q-42 0-71 29t-29 71v420q0 66 47 113t113 47q66 0 113-47t47-113v-420h60v420q0 92-64 156T460-80Z"/>
                            </svg>
                        </div>

                            <input placeholder='Write a message...'/>

                        <div className='icons-chat'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                                <path
                                    fill='#9d9d9d'
                                    d="M480-40q-149 0-254.5-42.5T120-200q0-32 20-57.5t56-45.5l65 58q-26 8-42.5 20.5T200-200q0 26 81 53t199 27q118 0 199-27t81-53q0-12-18.5-26.5T699-245l65-58q36 20 56 45.5t20 57.5q0 75-105.5 117.5T480-40Zm0-160q-22 0-42.5-7.5T400-230L148-453q-13-11-20.5-27t-7.5-33v-80q0-17 6.5-33t19.5-27l252-235q17-16 38-24t44-8q23 0 44 8t38 24l252 235q13 11 19.5 27t6.5 33v80q0 17-7.5 33T812-453L560-230q-17 15-37.5 22.5T480-200Zm-4-188q14 0 26.5-4.5T526-407l222-197-240-226q-7-5-14-7.5t-15-2.5q-8 0-15 2.5t-12 7.5L208-600l218 193q11 10 23.5 14.5T476-388ZM360-550q21 0 35.5-14.5T410-600q0-21-14.5-35.5T360-650q-21 0-35.5 14.5T310-600q0 21 14.5 35.5T360-550Zm50 54q43 21 90.5 13.5T584-522q34-29 44.5-73T618-678L410-496Zm70-174q21 0 35.5-14.5T530-720q0-21-14.5-35.5T480-770q-21 0-35.5 14.5T430-720q0 21 14.5 35.5T480-670Zm-2 56Z"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                                <path
                                    fill='#9d9d9d'
                                    d="M480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80ZM200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm400 0v-80h160v-160h80v160q0 33-23.5 56.5T760-120H600ZM120-600v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80Z"/>
                            </svg>

                        </div>

                    </div>
                    {randomWord && <p>Random Word: {randomWord.word}</p>}
                </div>
            ) : (
                <div className="empty-chat">Select a chat to start messaging</div>
            )}
        </div>
    );
};

export default ChatWindow;
