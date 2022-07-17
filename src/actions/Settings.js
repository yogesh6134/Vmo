import { Services } from "../services";
import { SET_ACTIVITIES } from "./Types";

export const setActivityList = () => {
  return async (dispatch) => {
    const activityList = await Services.SettingServices.getActivity();
    if (activityList !== "failed") {
      let activities = [];
      Object.keys(activityList).forEach((key) => {
        const interestedCount = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        const friendCount = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        activities.push({
          name: key,
          icon: activityList[key].image,
          isShow: false,
          interested: `${interestedCount} interested`,
          friend: `${friendCount} friends`,
        });
      });
      dispatch({ type: SET_ACTIVITIES, payload: activities });
    }
  };
};
