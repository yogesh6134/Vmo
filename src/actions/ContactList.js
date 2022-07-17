import { SET_CONTACTS, UPDATE_CONTACTS } from "./Types";

export const setContactsList = (payload, id) => {
  return {
    type: SET_CONTACTS,
    payload: {
      id: id,
      data: payload,
    },
  };
};
export const updateContactsList = (payload, id) => {
  return {
    type: UPDATE_CONTACTS,
    payload: {
      id: id,
      data: payload,
    },
  };
};
