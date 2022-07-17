import { useState } from "react";
import { View, ImageBackground, Image, Pressable } from "react-native";
import { Text } from "react-native-ui-lib";

import { styles } from "./styles";
import { Images } from "@assets/";
import Button from "@common/Button";
import Header from "@common/Header";
import LinearGradientWrapper from "@common/LinearGradientWrapper";
import { Screens } from "@constants/";
import * as Camera from "@libraries/imagePicker";
import { auth } from "@libraries/firebase";
import { connect } from "react-redux";
import { Services } from "@services/";
import { setUserImage } from "@actions/User";
import { logEvent } from "@utils/helper";
import * as Navigation from "@utils/navigation";

const PhotoScreen = ({ navigation, userProfile, setUserImage }) => {
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);
  const [pickedImage, setPickedImage] = useState("");

  const handleImageUpload = async () => {
    logEvent("Signup - Gallery");
    const responseUri = await Camera.showImagePicker();
    if (responseUri) {
      setPickedImage(responseUri);
    }
  };

  const onPress = async () => {
    setLoading(true);
    const uploadedPath = (await Camera.uploadImageToBucket(pickedImage)) ?? "";
    setUserImage(uploadedPath);
    const res = await Services.UserServices.saveUserProfile(
      user,
      userProfile,
      uploadedPath
    );
    if (res !== "failed") {
      logEvent("Signup - Photo");
      Navigation.reset(navigation, Screens.HOME_SCREEN);
      return;
    }
    setLoading(false);
    alert("Something went wrong!");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.itemArrange}>
          <Text hb28 textDark0>
            And lastly... let’s add{"\n"}a nice photo of you.
          </Text>
          <Text h16 textDark2 style={styles.descriptionText}>
            It adds a touch of authenticity to your profile.{"\n"}
            Wouldn’t you like to know who you’re texting?
          </Text>
          <Pressable
            onPress={handleImageUpload}
            style={{ alignItems: "center" }}
          >
            <LinearGradientWrapper style={styles.circle}>
              <Image
                source={pickedImage ? { uri: pickedImage } : Images.userAvatar}
                style={styles.userImage}
              />
            </LinearGradientWrapper>
            <LinearGradientWrapper style={styles.linearGradient}>
              <Image
                source={
                  pickedImage.length === 0 ? Images.plusSign : Images.refresh
                }
                style={styles.plus}
              />
            </LinearGradientWrapper>
          </Pressable>
        </View>

        <Button
          isLoading={loading}
          text={pickedImage.length === 0 ? "Skip" : "Next"}
          type={"primary"}
          size={"large"}
          round={12}
          onPress={onPress}
          style={styles.button}
        />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setUserImage })(PhotoScreen);
