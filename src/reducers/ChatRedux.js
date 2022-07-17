import {
  SET_GROUP_CHAT_MESSAGES,
  SET_GROUP_CHAT_TYPING,
  SET_GROUP_MEMBERS,
} from "@actions/Types";

const initialState = {
  messages: [],
  typingStatus: [],
  members: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP_CHAT_MESSAGES:
      return {
        ...state,
        messages: [...action.payload],
      };
    case SET_GROUP_CHAT_TYPING:
      return {
        ...state,
        typingStatus: [...action.payload],
      };
    case SET_GROUP_MEMBERS:
      return {
        ...state,
        members: [...action.payload],
      };
    default:
      return state;
  }
};

export default chatReducer;
