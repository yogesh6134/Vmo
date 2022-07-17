import { View, ImageBackground, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { Images } from "../../../../assets";
import { styles } from "./styles";
import { Screens } from "@constants/";

import * as Navigation from "@utils/navigation";
import { auth } from "@libraries/firebase";
import { Services } from "@services/";
import { setUserProfile } from "@actions/User";
import { setActivityList } from "@actions/Settings";
import { connect } from "react-redux";
import { logEvent, logUserIdentify } from "@utils/helper";
import { ACCOUNT_TYPE } from "@constants/amplitude";

const SplashScreen = ({ navigation, setUserProfile, setActivityList }) => {
  useEffect(() => {
    const authChangedSubscriber = auth.onAuthStateChanged(async (user) => {
      if (user) {
        logUserIdentify(user?.uid);
        setActivityList();
        const userExist = await Services.UserServices.checkUserExist(user.uid);
        if (userExist) {
          logEvent("Signup - Signed In", { [ACCOUNT_TYPE]: "Existing" });
          await setUserProfile(user.uid);
          Navigation.reset(navigation, Screens.HOME_SCREEN);
          return;
        }
        logEvent("Signup - Signed In", { [ACCOUNT_TYPE]: "New" });
        Navigation.reset(navigation, Screens.NAME_SCREEN, {
          mode: "onboarding",
        });
      } else {
        logUserIdentify(null);
        Navigation.reset(navigation, Screens.LANDING_SCREEN);
      }
    });

    return () => {
      authChangedSubscriber();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={Images.splash}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.itemArrange}>
          <Image source={Images.weekend} style={styles.appLogo} />
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setUserProfile,
  setActivityList,
})(SplashScreen);
