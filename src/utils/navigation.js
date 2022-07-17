import { Screens } from "@constants/";
import { CommonActions } from "@react-navigation/native";

export const reset = (navigation, routeName, options) => {
  if (!navigation) {
    return;
  }
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routeName,
          params: options,
        },
      ],
    })
  );
};

export const navigateToProfile = (navigation) => {
  navigation.navigate(Screens.PROFILE_SCREEN);
};
