import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { VIEW_TYPES } from '../../constants/stateTypes';
import { withRouter } from 'react-router-dom';
import { updateChatAction } from '../../actions';
import axios from 'axios';
import App from '../../components/App/App';

export const AppContainer = ({ chat, updateChat }) => {
  async function handleMessageSend(message) {
    updateChat({
      author: 'user',
      type: 'text',
      payload: message,
      time: new Date().toISOString()
    });

    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/message`, {
      message
    });

    // console.log(data);
    updateChat(data);
  }

  useEffect(() => {
    console.log('chat', chat);
  }, [chat]);

  return (
    <>
      <App
        messages={chat}
        onMessageSend={handleMessageSend} 
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
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);
