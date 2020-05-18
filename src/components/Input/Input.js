import React from 'react';
import styles from './Input.module.css';

export default function Input({ onChange, onKeyPress, text }) {
  return (
    <div id={styles.rightInputContainer}>
          <input 
            id={styles.rightInput}
            value={text}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
    </div>
  );
};
