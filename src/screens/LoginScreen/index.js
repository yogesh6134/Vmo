import { View, ImageBackground, Alert } from "react-native";
import React, { useState, useRef, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "react-native-ui-lib";
import { Images } from "@assets/";
import Header from "@common/Header";
import TextInput from "@common/TextInput";
import Button from "@common/Button";
import KeyboardWrapper from "@common/KeyboardWrapper";
import { SPACING } from "@theme/constants";
import Color from "@theme/colors";
import { styles } from "./styles";
import { Screens } from "@constants/";

import * as Navigation from "@utils/navigation";
import {
  sendOTPToPhoneNumber,
  signInWithPhoneNumber,
} from "@libraries/authentication";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../../config";
import { logEvent } from "@utils/helper";

const LoginScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [phoneText, setPhoneText] = useState("");
  const [otpText, setOtpText] = useState("");
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [otpFocused, setOtpFocused] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const recaptchaVerifier = useRef(null);
  const [verificationId, setVerificationId] = useState("");
  const [phoneLoading, setIsPhoneLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [phoneDisabled, setPhoneDisabled] = useState(false);

  const savePhone = async (value) => {
    try {
      await AsyncStorage.setItem("Phone", value);
    } catch (e) {
      console.log(e);
    }
  };

  const getPhone = async () => {
    try {
      const phoneStored = await AsyncStorage.getItem("Phone");
      if (phoneStored !== null) {
        setPhoneText(phoneStored);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPhone();
  }, []);

  const signInPhone = async () => {
    logEvent("Signup - Code");
    setIsPhoneLoading(true);
    const type = await signInWithPhoneNumber(verificationId, otpText);
    checkOtpStatus(type);
  };

  const checkOtpStatus = (type) => {
    if (type === "success") {
      Navigation.reset(navigation, Screens.SPLASH_SCREEN);
      return;
    }
    if (type === "Firebase: Error (auth/invalid-verification-code).") {
      alert("Wrong OTP entered!");
    }
    if (type === "Firebase: Error (auth/user-disabled).") {
      setPhoneDisabled(true);
      Alert.alert(
        "Account Suspended",
        "Sorry, your account has been banned. Please reach out to support@weekend.network to appeal this.",
        [
          {
            text: "OK",
            onPress: () => {
              Navigation.reset(navigation, Screens.LANDING_SCREEN);
            },
          },
        ]
      );
    }
    setIsPhoneLoading(false);
  };

  const sendOTPHandler = async () => {
    savePhone(phoneText);
    const responseId = await sendOTPToPhoneNumber(
      "+1" + phoneText,
      recaptchaVerifier
    );
    if (responseId !== "failed") {
      setVerificationId(responseId);
      setIndex(1);
      setTimeout(() => {
        setResend(true);
      }, 15000);
    }
  };

  if (index === 0) {
    return (
      <KeyboardWrapper style={styles.common}>
        <ImageBackground source={Images.background} style={styles.common}>
          <Header onPress={() => navigation.goBack()} />
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={false}
          />
          <Text hb28 textDark0 style={{ paddingLeft: SPACING.h15 }}>
            What’s your{"\n"}phone number?
          </Text>
          <Text h16 textDark2 style={styles.descriptionText}>
            We’ll send you an OTP at this number to sign you in.
          </Text>
          <View style={styles.itemArrange}>
            <TextInput
              placeholder="Phone Number"
              value={phoneText}
              validateOnBlur
              validationMessage={[
                "Phone number can't be empty.",
                "Please enter a valid phone number.",
              ]}
              validate={[
                "required",
                () => {
                  return phoneText.length === 10 ? true : false;
                },
              ]}
              validationMessageStyle={{
                color: Color.red2,
                marginTop: SPACING.v4,
              }}
              validationMessagePosition="bottom"
              keyboardType="phone-pad"
              maxLength={10}
              enableErrors={true}
              onChangeText={(value) => setPhoneText(value)}
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
              isFocused={phoneFocused}
              error={phoneError}
              onChangeValidity={(isValid) => setPhoneError(!isValid)}
              returnKeyType="done"
            />
            <Button
              text={"Next"}
              type={"primary"}
              size={"large"}
              disabled={phoneText.length !== 10}
              round={12}
              style={{ marginBottom: SPACING.v110 }}
              onPress={() => {
                logEvent("Signup - Phone Number");
                sendOTPHandler();
              }}
            />
          </View>
        </ImageBackground>
      </KeyboardWrapper>
    );
  }

  return (
    <KeyboardWrapper style={styles.common}>
      <ImageBackground source={Images.background} style={styles.common}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={false}
        />
        <Header onPress={() => setIndex(0)} />
        <Text hb28 textDark0 style={styles.otpHeading}>
          Boom, we sent over a{"\n"}code to {phoneText}
        </Text>
        <TextInput
          s4
          value={otpText}
          validateOnBlur
          validationMessage={["OTP can't be empty", "OTP is invalid"]}
          validate={[
            "required",
            () => {
              return otpText.length === 6 ? true : false;
            },
          ]}
          validationMessageStyle={{ color: Color.red2, marginTop: SPACING.v4 }}
          validationMessagePosition="bottom"
          keyboardType="phone-pad"
          placeholder="6 digit code"
          maxLength={6}
          enableErrors={true}
          onChangeText={(value) => setOtpText(value)}
          onFocus={() => setOtpFocused(true)}
          onBlur={() => setOtpFocused(false)}
          isFocused={otpFocused}
          error={otpError}
          onChangeValidity={(isValid) => setOtpError(!isValid)}
          returnKeyType="done"
        />
        <View style={styles.itemArrange}>
          <Button
            text={"Resend Code"}
            type={"primary"}
            size={"small"}
            round={15}
            disabled={!resend}
            onPress={() => {
              logEvent("Signup - Resend Code");
              sendOTPHandler();
            }}
            style={{ marginTop: SPACING.v35 }}
          />
          <Button
            text={"Next"}
            type={"primary"}
            size={"large"}
            disabled={otpText.length !== 6}
            round={12}
            style={{ marginBottom: SPACING.v110 }}
            onPress={signInPhone}
          />
        </View>
      </ImageBackground>
    </KeyboardWrapper>
  );
};

export default LoginScreen;
