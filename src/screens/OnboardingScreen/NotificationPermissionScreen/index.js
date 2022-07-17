import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Image } from "react-native";

import { Text } from "react-native-ui-lib";
import { Images } from "@assets/";
import Header from "@common/Header";
import Button from "@common/Button";
import { SPACING } from "@theme/constants";
import { styles } from "./styles";
import { Screens } from "@constants/";
import { connect } from "react-redux";
import {
  getPushNoticationToken,
  logEvent,
  logUserProperties,
} from "@utils/helper";
import { setPushToken } from "@actions/User";
import { PERMISSION } from "@constants/amplitude";

const NotificationPermissionScreen = ({
  navigation,
  userProfile,
  setPushToken,
}) => {
  const [loading, setLoading] = useState(false);

  const getPushNoticationTokenHandler = async () => {
    setLoading(true);
    const token = await getPushNoticationToken();
    setLoading(false);
    if (!token) {
      logEvent("Signup - Notifications", { [PERMISSION]: "No" });
      logUserProperties({ Notifications: false });
    } else {
      logEvent("Signup - Notifications", { [PERMISSION]: "Yes" });
      logUserProperties({ Notifications: true });
    }
    setPushToken(token);
  };

  return (
    <View style={styles.common}>
      <ImageBackground source={Images.background} style={styles.common}>
        <Header onPress={() => navigation.goBack()} />
        <Text hb28 textDark0 style={{ paddingHorizontal: SPACING.h20 }}>
          Should we ping you when someone texts you?
        </Text>
        <Text h16 textDark2 style={styles.descriptionText}>
          We know better than to send you useless notifications :)
        </Text>
        <Image source={Images.notification} style={styles.image} />
        <View style={styles.itemArrange}>
          <Button
            isLoading={loading}
            text={"Allow notifications"}
            type={"primary"}
            size={"large"}
            round={12}
            onPress={() => {
              getPushNoticationTokenHandler();
              navigation.navigate(Screens.BIO_SCREEN, { mode: "onboarding" });
            }}
          />
          <TouchableOpacity
            onPress={() => {
              logEvent("Signup - Notifications", { [PERMISSION]: "No" });
              logUserProperties({ Notifications: false });
              navigation.navigate(Screens.BIO_SCREEN, { mode: "onboarding" });
            }}
          >
            <Text h16 primary_main style={styles.textButton}>
              Not now
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setPushToken })(
  NotificationPermissionScreen
);
