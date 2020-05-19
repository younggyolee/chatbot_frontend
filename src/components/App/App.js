import React, { useState, useEffect } from 'react';
import ChatBot from '../ChatBot/ChatBot';
import styles from './App.module.css';

export default function App({
  messages,
  onMessageSend,
  isBotTyping
}) {
  const [showMore, setShowMore] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatBotEnd, setChatBotEnd] = useState({});

  function scrollToBottom() {
    if (chatBotEnd.scrollIntoView) {
      chatBotEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (showChatBot && chatBotEnd) {
      scrollToBottom();
    }
  }, [showChatBot, chatBotEnd]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 192) {
        setShowChatBot(!showChatBot);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return (function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    });
  }, [showChatBot]);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContentContainer}>
            <section class='text'>
              <span className={styles.title}>
                YOUNGGYO LEE
              </span>
              <hr/>
              <h2>Software Engineering</h2>
              <hr/>
              <p>
                &nbsp;SEOUL, May. {new Date().getDate()} - I am a freelancer software engineer, creating web and mobile services.
              </p>
              <p>
                &nbsp;I have always been a computer geek from my early childhood, and finally settled into software engineering after experiencing various roles in the IT industry.
              </p>
              <p>
                &nbsp;Currently I am doing several freelancing projects on web & mobile development and data engineering for digital marketing.
              </p>
              <p
                className={styles.lastParagraph}
                // onClick={() => setShowMore(true)}
                onClick={()=>setShowChatBot(true)}
              >
                &nbsp;&nbsp;For those who are interested, please click on this paragraph to open a chat bot to get to know more about me.
              </p>
            </section>
          </div>
        </div>
        {/* {showMore &&  */}
          <>
            <div className={styles.resumeContainer}>
              <h1>RESUME</h1>
              <a href='https://docs.google.com/document/d/1YPAfDPnAIoo5AREdLj_x0C4TAA5RwysK_GYyLTFXH_o/edit?usp=sharing'>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/resume.PNG`}
                  className={styles.largeImage}
                />
              </a>
            </div>
            <div className={styles.experienceContainer}>
              <div>
                <h1>EXPERIENCES</h1>
                <hr/>  
              </div>
              <div className={styles.farfetchContainer}>
                <img 
                  src={`${process.env.REACT_APP_PUBLIC_URL}/farfetch.PNG`}
                  className={styles.companyImage}
                />
                <div className={styles.worksTextContainer}>
                  <span className={styles.worksTextTitle}>Farfetch</span>
                  <br/>
                  <span className={styles.worksText}>Performance Marketing - Paid Search Team</span>
                </div>
              </div>
              <div className={styles.playdogsoftContainer}>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/playdog.PNG`}
                  className={styles.companyImage}
                />
                <div className={styles.worksTextContainer}>
                  <span className={styles.worksTextTitle}>Playdog Soft</span>
                  <br/>
                  <span className={styles.worksText}>Game Designer - Casual Game Team</span>
                </div>
              </div>
            </div>
          </>
        {/* } */}
        <div 
          style={{ float:"left", clear: "both" }}
          ref={(el) => { setChatBotEnd(el) }}
        />
        {
          showChatBot &&
          <div className={styles.chatBotContainer}>
            <ChatBot
              messages={messages}
              onMessageSend={onMessageSend}
              isBotTyping={isBotTyping}
            />
          </div>
        }
        
      </div>
    </div>
  );
};
