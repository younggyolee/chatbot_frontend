import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Input from '../Input/Input';
import Message from '../Message/Message';
import PulseLoader from "react-spinners/PulseLoader";

export default function App({
  messages,
  onMessageSend,
  isBotTyping
}) {
  const [messagesEnd, setMessagesEnd] = useState({});

  function scrollToBottom() {
    if (messagesEnd.scrollIntoView) {
      messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div id={styles.rootContainer}>
      <div id={styles.rightContainer}>
        <div 
          className={styles.headerContainer}
        >
          <img 
            src={`${process.env.REACT_APP_PUBLIC_URL}/younggyo.PNG`}
            className={styles.profileImage}
          />
          <div className ={styles.headerNameTextContainer}>
            <span>
              Younggyo Lee
            </span>
          </div>
        </div>
        <div id={styles.rightContentContainer}>
          {messages.map((message, index) =>
            <Message
              key={index}
              message={message}
              onMessageSend={onMessageSend}
            />
          )}
          { 
            isBotTyping && 
            <div id={styles.PulseLoaderContainer}>
              <PulseLoader
                size={'1rem'}
                margin={'0.3rem'}
                color={'lightgrey'}
                loading={isBotTyping}
              />
            </div>
          }
          <div 
            style={{ float:"left", clear: "both" }}
            ref={(el) => { setMessagesEnd(el) }}
          >
          </div>
        </div>
        <div id={styles.rightInputContainer}>
          <Input
            onMessageSend={onMessageSend}
          />
        </div>
        <div className={styles.footerContainer}>
          <a
            href='https://github.com/younggyolee/chatbot_frontend'
            target='_blank'
          >
            Designed & Built by Younggyo Lee
          </a>
        </div>
      </div>
    </div>
  );
};
