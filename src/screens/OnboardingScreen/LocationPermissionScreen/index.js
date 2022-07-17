import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

import { Text } from "react-native-ui-lib";
import { Images } from "@assets/";
import Header from "@common/Header";
import Button from "@common/Button";
import { SPACING } from "@theme/constants";
import { styles } from "./styles";
import { Screens } from "@constants/";
import { checkGeofence, getCurrentLocation, logEvent } from "@utils/helper";
import { setUserLocation } from "@actions/User";
import { connect } from "react-redux";
import { sanFranciscoGeofence } from "@constants/geofence";
import { PERMISSION } from "@constants/amplitude";

const LocationPermission = ({ navigation, setUserLocation }) => {
  const [loading, setLoading] = useState(false);

  const allowLocationPermissionHandler = useCallback(async () => {
    setLoading(true);
    const currentLocation = await getCurrentLocation();

    setLoading(false);

    if (currentLocation === null) {
      logEvent("Signup - Location", { [PERMISSION]: "No" });
    } else {
      logEvent("Signup - Location", { [PERMISSION]: "Yes" });
    }
    // const isEnabled = checkGeofence(sanFranciscoGeofence, [
    //   currentLocation.latitude,
    //   currentLocation.longitude,
    // ]);

    setUserLocation(currentLocation);
  }, []);

  return (
    <View style={styles.common}>
      <ImageBackground source={Images.background} style={styles.common}>
        <Header onPress={() => navigation.goBack()} />
        <Text hb28 textDark0 style={{ paddingHorizontal: SPACING.h20 }}>
          Some great friendships are made locally!
        </Text>
        <Text h16 textDark2 style={styles.descriptionText}>
          We need your location to find you local groups.
        </Text>
        <Image source={Images.location} style={styles.image} />
        <View style={styles.itemArrange}>
          <Button
            isLoading={loading}
            text={"Allow location based matching"}
            type={"primary"}
            size={"large"}
            round={12}
            onPress={() => {
              allowLocationPermissionHandler();
              navigation.navigate(Screens.NOTIFICATION_PERMISSION_SCREEN);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              logEvent("Signup - Location", { [PERMISSION]: "No" });
              navigation.navigate(Screens.NOTIFICATION_PERMISSION_SCREEN);
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setUserLocation })(
  LocationPermission
);
