import * as types from '../constants/actionTypes';

export const updateChatAction = (message) => ({
  type: types.UPDATE_CHAT,
  message
});

export const removeChoicesAction = () => ({
  type: types.REMOVE_CHOICES
})
