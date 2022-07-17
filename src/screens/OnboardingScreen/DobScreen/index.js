import { View, ImageBackground } from "react-native";
import React, { useState } from "react";

import { Text, DateTimePicker } from "react-native-ui-lib";
import { Images } from "@assets/";
import Header from "@common/Header";
import Button from "@common/Button";
import { SPACING } from "@theme/constants";
import Color from "@theme/colors";
import { styles } from "./styles";
import { Screens } from "@constants/";
import { connect } from "react-redux";
import { setDOB } from "@actions/User";
import { getAge, logEvent, logUserProperties } from "@utils/helper";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";

const DobScreen = ({ navigation, setDOB, userProfile, route }) => {
  const { mode } = route?.params;
  const [date, setDate] = useState(userProfile?.dob ?? "");
  const [error, setError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    let age = getAge(selectedDate);
    setDOB({ selectedDate, age });
    setError(false);
    setAgeError(false);
  };

  const onPress = async () => {
    if (userProfile.dob !== "") {
      if (userProfile.age < 18) {
        setAgeError(true);
        return;
      }
      if (mode === "edit") {
        setLoading(true);
        const res = await Services.UserServices.updateDob(
          user.uid,
          userProfile
        );
        if (res !== "failed") {
          navigateToProfile(navigation);
          return;
        }
        setLoading(false);
        alert("Something went wrong!");
        return;
      }
      logEvent("Signup - Birthday");
      logUserProperties({
        Birthday: userProfile.dob,
        Age: userProfile.age,
      });
      navigation.navigate(Screens.IDENTITY_SCREEN, {
        mode: "onboarding",
      });
      return;
    }
    setError(true);
  };

  return (
    <View style={styles.common}>
      <ImageBackground source={Images.background} style={styles.common}>
        <Header
          onPress={() => {
            if (mode === "edit") {
              navigateToProfile(navigation);
              return;
            }
            navigation.goBack();
          }}
        />
        <Text hb28 textDark0 style={{ paddingLeft: SPACING.h15 }}>
          What’s your birthday?
        </Text>

        <View style={styles.itemArrange}>
          <DateTimePicker
            placeholder="I was born on..."
            value={date}
            mode={"date"}
            onChange={onChange}
            underlineColor={Color.primary_main}
            themeVariant="light"
          />

          {error && (
            <Text style={styles.descriptionText}>
              Please enter your birthday.
            </Text>
          )}
          {ageError && (
            <Text style={styles.descriptionText}>
              You must be at least 18 years old to use Weekend..
            </Text>
          )}
          <Button
            text={mode === "edit" ? "Save" : "Next"}
            type={"primary"}
            size={"large"}
            round={12}
            onPress={onPress}
            style={styles.button}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setDOB })(DobScreen);
