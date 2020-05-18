import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Input from '../Input/Input';

export default function App({ messages }) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  function handleInputKeyPress(event) {
    if (event.charCode === 13) {
      console.log('enter pressed');
    }
  }

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
            <div key={index} className={styles[`${message.author}Message`]}>
              <div>{message.payload}</div>
              <div>{message.time}</div>
            </div>
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
