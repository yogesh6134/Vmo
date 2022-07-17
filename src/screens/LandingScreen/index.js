import React from "react";
import { Screens } from "../../../constants";
import Carousel from "@common/Carousel";
import { logEvent } from "@utils/helper";

const LandingScreen = ({ navigation }) => {
  return (
    <Carousel
      onPress={() => {
        navigation.navigate(Screens.LOGIN_SCREEN);
        logEvent("Signup - Get Started");
      }}
      onPressTerms={() => navigation.navigate(Screens.TERMS_CONDITION_SCREEN)}
      onPressPolicy={() => navigation.navigate(Screens.PRIVACY_POLICY_SCREEN)}
    />
  );
};

export default LandingScreen;
