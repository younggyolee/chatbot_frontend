import React from 'react';
import Linkify from 'react-linkify';
import styles from './Message.module.css';

export default function message({ message, onMessageSend }) {
  return (
    <div id={styles.rootContainer}>
      <Linkify>
        <div className={styles['messageContainer']}>
          <span className={styles[`${message.author}Message`]}>
            {message.payload}
          </span>
        </div>
        <div className={styles.choicesContainer}>
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
    </div>
  );
};
