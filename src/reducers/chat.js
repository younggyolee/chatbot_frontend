import {
  UPDATE_CHAT,
  REMOVE_CHOICES
} from '../constants/actionTypes';

const chat = (state = [
  {
    author: 'bot',
    type: 'text',
    payload: 'Welcome! I am Younggyo, a software engineer. Ask me anything.',
    choices: ['What\'s your name?', 'Resume']
  }
], action) => {
  switch (action.type) {
    case UPDATE_CHAT:
      return [
        ...state,
        action.message
      ];
    case REMOVE_CHOICES:
      const newState = JSON.parse(JSON.stringify(state));
      console.log('newState', newState);
      if (newState.length) {
        newState[newState.length - 1].choices = [];
      }
      return [
        ...newState
      ];
    default:
      return state;
  };
};

export default chat;
