import React from 'react';
import { connect } from 'react-redux';
// import { VIEW_TYPES } from '../../constants/stateTypes';
import { withRouter } from 'react-router-dom';
import App from '../../components/App/App';

export const AppContainer = () => {
  const messages = [
    {
      author: 'user',
      type: 'text',
      payload: 'Hello world',
      time: '22:11'
    },
    {
      author: 'bot',
      type: 'text',
      payload: 'Okie, thank you human',
      time: '22:12'
    }
  ]
  return (
    <>
      <App messages={messages} />
    </>
  );
};

const mapStateToProps = state => ({
});

export default withRouter(
  connect(mapStateToProps, null)(AppContainer)
);
