import * as types from '../constants/actionTypes';

export const setView = (view) => ({
  type: types.SET_VIEW,
  view
});

export const setUsername = (username) => ({
  type: types.SET_USERNAME,
  username
});

export const setMatename = (matename) => ({
  type: types.SET_MATENAME,
  matename
});

export const updateChat = (message) => ({
  type: types.UPDATE_CHAT,
  message
});

export const clearChat = () => ({
  type: types.CLEAR_CHAT
});
