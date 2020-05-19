import React, { useState, useEffect } from 'react';
import Linkify from 'react-linkify';
import styles from './App.module.css';
import Input from '../Input/Input';

export default function App({ messages, onMessageSend }) {
  const [inputText, setInputText] = useState('');

  async function handleInputKeyPress(event) {
    if (event.charCode === 13) {
      await onMessageSend(event.target.value);
    }
  }

  useEffect(() => {
    console.log('messages', messages);
  }, [messages]);

  return (
    <div id={styles.rootContainer}>
      <div id={styles.leftContainer}>
        <div id={styles.leftHeaderContainer} className={styles.headerContainer}>
          LEFT HEADER
        </div>
        <div id={styles.leftContentContainer}>
          LEFT CONTENT
        </div>
      </div>
      <div id={styles.rightContainer}>
        <div id={styles.rightHeaderContainer} className={styles.headerContainer}>
          RIGHT HEADER
        </div>
        <div id={styles.rightContentContainer}>
          {messages.map((message, index) =>
            <>
              <Linkify>
                <div key={index} className={styles[`${message.author}Message`]}>
                  <div>{message.payload}</div>
                </div>
                <div>
                  {
                    message.choices &&
                    message.choices.map(choice =>
                      <span
                        className={styles.choices}
                        onClick={() => onMessageSend(choice)}
                      >
                        {choice}
                      </span>
                    )
                  }
                </div>
              </Linkify>
            </>
          )}
        </div>
        <div id={styles.rightInputAreaContainer}>
          <Input
            text={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      </div>
    </div>
  );
};
