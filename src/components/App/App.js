import React, { useState, useEffect } from 'react';
import ChatBot from '../ChatBot/ChatBot';
import styles from './App.module.css';

export default function App({
  messages,
  onMessageSend,
  isBotTyping
}) {
  // const [showMore, setShowMore] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatBotEnd, setChatBotEnd] = useState({});

  function scrollToBottom() {
    if (chatBotEnd.scrollIntoView) {
      chatBotEnd.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  useEffect(() => {
    if (showChatBot && chatBotEnd) {
      scrollToBottom();
    }
  }, [showChatBot, chatBotEnd, scrollToBottom]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 192) {
        // setShowMore(true);
        setShowChatBot(!showChatBot);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return (function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    });
  }, [showChatBot]);

  const dayNum = new Date().getDate();
  const month = (new Date()).toLocaleDateString('default', { month: 'long' }).substring(0, 3);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContentContainer}>
            <section className={styles.text}>
              <span className={styles.title}>
                YOUNGGYO LEE
              </span>
              <hr/>
              <h2>Software Engineering</h2>
              <hr/>
              <p>
                &nbsp;SEOUL, {dayNum} {month} - I am a software engineer, creating web and mobile services.
              </p>
              <p>
                &nbsp;I have always been a computer geek from my early childhood, and finally settled into software engineering after experiencing various roles in the IT industry.
              </p>
              <p>
                &nbsp;I worked on several projects on web development and data engineering & automation projects in the digital marketing area.
              </p>
              <p>
                &nbsp;Currently I am working as a software engineer at Tapjoy, a mobile advertising platform headquartered in Silicon Valley with offices across the world.
              </p>
              <p
                className={styles.lastParagraph}
                // onClick={() => setShowMore(true)}
                onClick={()=>setShowChatBot(true)}
              >
                &nbsp;For those who are interested, please press or click on this paragraph to open a chat bot, and get to know more about me.
              </p>
            </section>
          </div>
        </div>
        {showChatBot &&
        // {showMore &&
          <>
            <div className={styles.resumeContainer}>
              <h1>RESUME</h1>
              <a href='https://docs.google.com/document/d/1YPAfDPnAIoo5AREdLj_x0C4TAA5RwysK_GYyLTFXH_o/edit?usp=sharing'>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/resume.PNG`}
                  className={styles.largeImage}
                  alt='a logo for resume'
                />
              </a>
            </div>
            <div className={styles.experienceContainer}>
              <div>
                <h1>EXPERIENCES</h1>
                <hr/>  
              </div>
              <div className={styles.tapjoyContainer}>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/tapjoy.PNG`}
                  className={styles.tapjoyImage}
                  alt='a logo for Tapjoy'
                />
                <div className={styles.worksTextContainer}>
                  <span className={styles.worksTextTitle}>Tapjoy</span>
                  <br/>
                  <span className={styles.worksText}>Software Engineer - Ad Dashboard Team</span>
                </div>
              </div>
              <div className={styles.farfetchContainer}>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/farfetch.PNG`}
                  className={styles.companyImage}
                  alt='a logo for Farfetch'
                />
                <div className={styles.worksTextContainer}>
                  <span className={styles.worksTextTitle}>Farfetch</span>
                  <br/>
                  <span className={styles.worksText}>Junior Performance Marketing Exec. - Paid Search Marketing Team</span>
                </div>
              </div>
              <div className={styles.playdogsoftContainer}>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/playdog.PNG`}
                  className={styles.companyImage}
                  alt='a logo for Playdog Soft'
                />
                <div className={styles.worksTextContainer}>
                  <span className={styles.worksTextTitle}>Playdog Soft</span>
                  <br/>
                  <span className={styles.worksText}>Game Designer - Casual Game Team</span>
                </div>
              </div>
            </div>
            <div className={styles.chatBotContainer}>
              <ChatBot
                messages={messages}
                onMessageSend={onMessageSend}
                isBotTyping={isBotTyping}
              />
              <div
                style={{ float:"left", clear: "both" }}
                ref={(el) => { setChatBotEnd(el) }}
              />
            </div>
          </>
        }
      </div>
    </div>
  );
};
