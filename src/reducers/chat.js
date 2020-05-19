import {
  UPDATE_CHAT,
  REMOVE_CHOICES
} from '../constants/actionTypes';

const chat = (state = [
  {
    author: 'bot',
    type: 'text',
    payload: 'Welcome to my website. My name is Younggyo Lee.'
  },
  {
    author: 'bot',
    type: 'text',
    payload: 'Enjoy chatting with my bot.',
    choices: [
      'How do I pronounce your name?',
      'Resume',
      'Linkedin',
      'Github'
    ]
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
