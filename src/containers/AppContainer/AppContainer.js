import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateChatAction, removeChoicesAction } from '../../actions';
import axios from 'axios';
import App from '../../components/App/App';

export const AppContainer = ({ chat, updateChat, removeChoices }) => {
  const [isBotTyping, setIsBotTyping] = useState(false);

  async function handleMessageSend(message) {
    removeChoices();
    updateChat({
      author: 'user',
      type: 'text',
      payload: message,
      time: new Date().toISOString()
    });

    setIsBotTyping(true);

    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/message`, {
      message
    });

    let interval = data.payload.split(' ').length * 300;
    interval = (interval > 2000) ? 1500 : interval;

    setTimeout(() => {
      setIsBotTyping(false);
      updateChat(data);
    }, interval);
  }

  return (
    <>
      <App
        messages={chat}
        onMessageSend={handleMessageSend} 
        isBotTyping={isBotTyping}
      />
    </>
  );
};

const mapStateToProps = state => ({
  chat: state.chat
});

const mapDispatchToProps = dispatch => {
  return {
    updateChat(message) {
      dispatch(updateChatAction(message));
    },
    removeChoices(message) {
      dispatch(removeChoicesAction(message));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);
