import { UPDATE_CHAT } from '../constants/actionTypes';

const chat = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CHAT:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  };
};

export default chat;
