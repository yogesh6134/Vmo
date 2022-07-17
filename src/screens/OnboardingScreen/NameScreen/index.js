import { View, ImageBackground, Dimensions } from "react-native";
import React, { createRef, useState } from "react";

import { Text } from "react-native-ui-lib";
import { Images } from "@assets/";
import Header from "@common/Header";
import TextInput from "@common/TextInput";
import Row from "@common/Row";
import Button from "@common/Button";
import KeyboardWrapper from "@common/KeyboardWrapper";
import { SPACING } from "@theme/constants";
import Color from "@theme/colors";
import { styles } from "./styles";
import { Screens } from "@constants/";
import { connect } from "react-redux";
import { setUserName } from "@actions/User";
import { logEvent, logUserProperties } from "@utils/helper";
import { auth } from "@libraries/firebase";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";

const width = Dimensions.get("window").width;

const NameScreen = ({ navigation, setUserName, route, userProfile }) => {
  const { mode = "onboarding" } = route?.params;
  const [firstName, setFirstName] = useState(userProfile?.firstName ?? "");
  const [firstFocused, setFirstFocused] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastName, setLastName] = useState(userProfile?.lastName ?? "");
  const [lastFocused, setLastFocused] = useState(false);
  const [lastError, setLastError] = useState(false);
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const user = auth?.currentUser;

  const onPress = async () => {
    if (
      firstNameRef.current?.validate?.() &&
      lastNameRef.current?.validate?.()
    ) {
      setUserName({ firstName, lastName });
      if (mode === "edit") {
        const res = await Services.UserServices.updateName(
          user.uid,
          firstName,
          lastName
        );
        if (res !== "failed") {
          navigateToProfile(navigation);
          return;
        }
      }
      logEvent("Signup - Name");
      logUserProperties({ "First Name": firstName, "Last Name": lastName });
      navigation.navigate(Screens.HIGH_LIGHT_SCREEN);
    }
  };

  return (
    <KeyboardWrapper style={styles.common}>
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
          Glad you’re here.{"\n"}Let’s get to know you!
        </Text>
        <View style={styles.itemArrange}>
          <Row style={styles.inputRow}>
            <TextInput
              ref={firstNameRef}
              placeholder="First Name"
              value={firstName}
              validateOnBlur
              validationMessage={["First name can't be empty"]}
              validate={[
                "required",
                () => {
                  return firstName.length <= 20;
                },
              ]}
              validationMessageStyle={{
                color: Color.red2,
                marginTop: SPACING.v4,
              }}
              validationMessagePosition="bottom"
              maxLength={20}
              enableErrors={true}
              onChangeText={(value) => setFirstName(value)}
              onFocus={() => setFirstFocused(true)}
              onBlur={() => setFirstFocused(false)}
              isFocused={firstFocused}
              error={nameError}
              onChangeValidity={(isValid) => setNameError(!isValid)}
              returnKeyType="next"
              customWidth={(width - 64) / 2}
              onSubmitEditing={() => lastNameRef?.current?.focus()}
            />
            <TextInput
              ref={lastNameRef}
              placeholder="Last Name"
              value={lastName}
              validateOnBlur
              validationMessage={["Last name can't be empty"]}
              validate={[
                "required",
                () => {
                  return lastName.length <= 20;
                },
              ]}
              validationMessageStyle={{
                color: Color.red2,
                marginTop: SPACING.v4,
              }}
              validationMessagePosition="bottom"
              maxLength={20}
              enableErrors={true}
              onChangeText={(value) => setLastName(value)}
              onFocus={() => setLastFocused(true)}
              onBlur={() => setLastFocused(false)}
              isFocused={lastFocused}
              error={lastError}
              onChangeValidity={(isValid) => setLastError(!isValid)}
              returnKeyType="next"
              customWidth={(width - 64) / 2}
            />
          </Row>
          <View>
            <Row style={styles.row}>
              <Text text_dark0 h14 style={styles.text}>
                By tapping ‘Next’, I acknowledge that I have read and accepted
                the
                <Text
                  h14
                  primary_main
                  style={styles.text}
                  onPress={() =>
                    navigation.navigate(Screens.TERMS_CONDITION_SCREEN)
                  }
                >
                  Terms of Use
                </Text>{" "}
                and{" "}
                <Text
                  primary_main
                  h14
                  style={styles.text}
                  onPress={() =>
                    navigation.navigate(Screens.PRIVACY_POLICY_SCREEN)
                  }
                >
                  Privacy Policy
                </Text>
              </Text>
            </Row>
            <Button
              text={mode === "edit" ? "Save" : "Next"}
              type={"primary"}
              size={"large"}
              round={12}
              style={styles.button}
              onPress={onPress}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardWrapper>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setUserName })(NameScreen);
