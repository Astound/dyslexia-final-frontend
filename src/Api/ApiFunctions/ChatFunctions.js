import {
  CREATE_CHAT,
  GET_ALL_USERS,
  GET_CHATS_BY_CHAT_ID,
  GET_CHATS_BY_USER_ID,
  SEND_MESSAGE,
} from "../URI";
import axiosWithApi from "../axiosWithApiServer";

export const getChatsByUserId = (userId) => {
  const url = GET_CHATS_BY_USER_ID.url + userId;
  return axiosWithApi({ url, method: GET_CHATS_BY_USER_ID.reqType });
};
export const getChatsByChatId = (chatId) => {
  const url = GET_CHATS_BY_CHAT_ID.url + chatId;
  return axiosWithApi({ url, method: GET_CHATS_BY_CHAT_ID.reqType });
};

export const getAllUsers = () => {
  const url = GET_ALL_USERS.url;
  return axiosWithApi({ url, method: GET_ALL_USERS.reqType });
};

export const createChat = (chatObj) => {
  const url = CREATE_CHAT.url;
  return axiosWithApi({
    url,
    method: CREATE_CHAT.reqType,
    body: JSON.stringify(chatObj),
  });
};

export const sendMessage = (messageObj) => {
  const url = SEND_MESSAGE.url;
  return axiosWithApi({
    url,
    method: SEND_MESSAGE.reqType,
    body: JSON.stringify(messageObj),
  });
};
