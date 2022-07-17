import { SET_ACTIVITIES } from "@actions/Types";

const initialState = {
  activities: [],
};

const settingsReducer = (state = initialState, action) => {
  const activityList = state.activity;
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
