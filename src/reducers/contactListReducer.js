import { SET_CONTACTS, UPDATE_CONTACTS } from "../actions/Types";
const initialstate = {
  contactList: [],
};

const contactListReducer = function (state = initialstate, action) {
  switch (action.type) {
    case SET_CONTACTS:
      const { id, data } = action.payload;
      return {
        ...state,
        contactList: [...state.contactList, { id: id, data: data }],
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contactList: state.contactList.filter((item) =>
          item.id != action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
export default contactListReducer;
