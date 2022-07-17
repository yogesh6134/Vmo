import React, { useState } from "react";
import { View, ImageBackground, TextInput } from "react-native";

import { Text } from "react-native-ui-lib";
import { Images } from "@assets/";
import Header from "@common/Header";
import Button from "@common/Button";
import { SPACING } from "@theme/constants";
import { styles } from "./styles";
import Color from "@theme/colors";
import { Screens } from "@constants/";
import { setUserBio } from "@actions/User";
import { connect } from "react-redux";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import KeyboardWrapper from "@common/KeyboardWrapper";
import { logEvent, logUserProperties } from "@utils/helper";
import { BIO_LENGTH } from "@constants/amplitude";

const BioScreen = ({ navigation, route, userProfile, setUserBio }) => {
  const [bio, setBio] = useState(userProfile.bio ?? "");
  const [loading, setLoading] = useState(false);
  const { mode } = route.params;
  const user = auth.currentUser;

  const onPress = async () => {
    setUserBio(bio);
    if (mode === "edit") {
      setLoading(true);
      const res = await Services.UserServices.updateBio(user.uid, bio);
      if (res !== "failed") {
        navigateToProfile(navigation);
        return;
      }
      setLoading(false);
      alert("Something went wrong!");
      return;
    }
    logEvent("Signup - Bio", { [BIO_LENGTH]: bio.length });
    logUserProperties({ "Bio Text": bio });
    navigation.navigate(Screens.PHOTO_SCREEN);
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
          In your own words now...
        </Text>
        <Text h16 textDark2 style={styles.descriptionText}>
          Introduce yourself briefly. This will be seen by the new friends you
          make!
        </Text>
        <View style={styles.itemArrange}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setBio(value)}
            value={bio}
            placeholder={"My Bio"}
            placeholderTextColor={Color.text_dark3}
            multiline
            maxLength={200}
            textAlignVertical={"top"}
            padding={12}
            blurOnSubmit={true}
          />
          <Text h14 style={styles.countText}>
            {bio.length}/200
          </Text>
        </View>
        <Button
          isLoading={loading}
          text={mode === "edit" ? "Save" : bio.length > 0 ? "Next" : "Skip"}
          type={"primary"}
          size={"large"}
          round={12}
          onPress={onPress}
          style={{ marginBottom: SPACING.v110 }}
        />
      </ImageBackground>
    </KeyboardWrapper>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setUserBio })(BioScreen);
