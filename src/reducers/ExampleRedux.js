import { EXAMPLE } from "../actions/Types";

const initialstate = {
  example: [],
};

const exampleReducer = function (state = initialstate, action) {
  switch (action.type) {
    case EXAMPLE:
      return { ...state, example: action.payload };

    default:
      return state;
  }
};
export default exampleReducer;
