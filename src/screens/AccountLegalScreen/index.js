import { View, StatusBar, ImageBackground, Alert } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";

import { Images } from "@assets/";
import { styles } from "./styles";
import Header from "@common/Header";
import Row from "@common/Row";
import UserInfoCard from "@common/UserInfoCard";
import Color from "@theme/colors";
import { Screens } from "@constants/";
import * as Navigation from "@utils/navigation";
import { logoutFromFirebase } from "@libraries/authentication";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import { clearUserProfile } from "@actions/User";
import { connect } from "react-redux";

const AccountLegalScreen = ({ navigation, clearUserProfile }) => {
  const currentUser = auth.currentUser;

  const logOut = async () => {
    const response = await logoutFromFirebase(currentUser);
    if (response === "success") {
      clearUserProfile();
      Navigation.reset(navigation, Screens.LANDING_SCREEN);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            const response = await Services.UserServices.deleteUserAccount(
              currentUser.uid
            );
            if (response === "success") {
              logOut();
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={Images.background}
        resizeMode="cover"
        style={styles.container}
      >
        <Row>
          <Header onPress={() => navigation.goBack()} />
          <Text h20 style={styles.heading}>
            Account & Legal
          </Text>
        </Row>
        <View style={styles.itemArrange}>
          <View style={styles.listWrapper}>
            <UserInfoCard
              title={"Terms of Use"}
              onPress={() =>
                navigation.navigate(Screens.TERMS_CONDITION_SCREEN)
              }
            />
            <View style={styles.line} />
            <UserInfoCard
              title={"Privacy Policy"}
              onPress={() => navigation.navigate(Screens.PRIVACY_POLICY_SCREEN)}
            />
          </View>
          <View style={styles.listWrapper}>
            <UserInfoCard title={"Sign out"} onPress={logOut} />
            <View style={styles.line} />
            <UserInfoCard
              title={"Delete account"}
              onPress={handleDelete}
              textColor={Color.gradientOrange}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { clearUserProfile })(
  AccountLegalScreen
);
