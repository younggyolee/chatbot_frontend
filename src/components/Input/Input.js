import React, { useState } from 'react';
import styles from './Input.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Input({ onMessageSend }) {
  const [text, setText] = useState('');

  async function handleKeyPress(event) {
    if (!text.length) return;
    if (event.charCode === 13) {
      await onMessageSend(text);
      setText('');
    }
  }

  async function handleSendClick() {
    if (!text.length) return;
    await onMessageSend(text);
    setText('');
  }

  return (
    <div id={styles.rootContainer}>
      <input 
        id={styles.rightInput}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder='Type a message'
      />
      <div id={styles.sendIconContainer}>
        <FontAwesomeIcon
          icon={ faPaperPlane }
          size='2x'
          onClick={handleSendClick}
          color='rgb(58,243,123)'
        />
      </div>
    </div>
  );
};
