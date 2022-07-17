import {
  Alert,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Header from "@common/Header";
import LinearGradientWrapper from "../../common/LinearGradientWrapper";
import { Images } from "../../../../assets";
import { Text } from "react-native-ui-lib";
import Row from "@common/Row";
import CustomChip from "@common/CustomChip";
import UserInfoCard from "@common/UserInfoCard";
import TextGradientWrapper from "@common/TextGradientWrapper";
import { connect } from "react-redux";
import { Screens } from "@constants/";
import moment from "moment";

import * as Navigation from "@utils/navigation";
import { logoutFromFirebase } from "@libraries/authentication";
import { auth } from "@libraries/firebase";
import * as Camera from "@libraries/imagePicker";
import { setUserImage } from "@actions/User";
import { Services } from "@services/";
import { SPACING } from "@theme/constants";
import CustomFastImage from "@common/CustomFastImage";

const ProfileScreen = ({ navigation, userProfile, setUserImage }) => {
  const [imageUrl, setImageUrl] = useState();
  const currentUser = auth.currentUser;
  const filteredInterest = userProfile?.userInterest?.filter(
    (i) => i.isShow === true
  );

  const handleImageUpload = async () => {
    const responseUri = await Camera.showImagePicker();
    if (responseUri) {
      const uploadedPath = await Camera.uploadImageToBucket(responseUri);
      setImageUrl(uploadedPath);
      setUserImage(uploadedPath);
      await Services.UserServices.updateUserImage(
        currentUser.uid,
        uploadedPath
      );
    }
  };

  const formatted = moment(userProfile.dob).format("DD/MM/YYYY");

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.container}>
        <Header
          onPress={() => navigation.navigate(Screens.HOME_SCREEN)}
          style={{ position: "absolute", zIndex: 99 }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <View style={{ alignItems: "center", paddingTop: SPACING.v110 }}>
            <LinearGradientWrapper style={styles.circle}>
              {userProfile.image ? (
                <CustomFastImage
                  uri={userProfile.image}
                  style={styles.userImage}
                />
              ) : (
                <Image source={Images.userAvatar} style={styles.userImage} />
              )}
            </LinearGradientWrapper>
            <LinearGradientWrapper style={styles.linearGradient}>
              <TouchableOpacity onPress={handleImageUpload}>
                <Image source={Images.refresh} style={styles.plus} />
              </TouchableOpacity>
            </LinearGradientWrapper>
            <Text h32 marginT-16 textDark0>
              {userProfile.firstName}
            </Text>
            <Text hb16 textDark3>
              {userProfile.professionData.description}
              {userProfile.professionData.description && userProfile.age && ","}
              {userProfile.age}
            </Text>
          </View>

          <View style={styles.edit}>
            <Row style={{ justifyContent: "space-between" }}>
              <Text hb16 textDark3>
                My Bio
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Screens.BIO_SCREEN, { mode: "edit" });
                }}
              >
                <View style={styles.editTextStyle}>
                  <TextGradientWrapper>
                    <Text style={styles.editText}>Edit</Text>
                  </TextGradientWrapper>
                </View>
              </TouchableOpacity>
            </Row>
            <Text h16 textDark0 style={styles.bioText}>
              {userProfile?.bio}
            </Text>
          </View>

          <View style={styles.edit}>
            <Row style={{ justifyContent: "space-between" }}>
              <Text hb16 textDark3>
                My Interests
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Screens.INTEREST_SCREEN, {
                    mode: "edit",
                  });
                }}
              >
                <View style={styles.editTextStyle}>
                  <TextGradientWrapper>
                    <Text style={styles.editText}>Edit</Text>
                  </TextGradientWrapper>
                </View>
              </TouchableOpacity>
            </Row>
            <Row style={styles.chip}>
              {filteredInterest?.map((item) => {
                return <CustomChip key={item.id} label={item.label} />;
              })}
            </Row>
          </View>

          <View style={styles.edit}>
            <Text hb16 textDark3>
              Basics
            </Text>
            <View style={styles.listWrapper}>
              <UserInfoCard
                title={"Name"}
                value={userProfile?.firstName + " " + userProfile?.lastName}
                onPress={() =>
                  navigation.navigate(Screens.NAME_SCREEN, {
                    mode: "edit",
                  })
                }
              />
              <View style={styles.line} />
              <UserInfoCard
                title={"Gender"}
                value={userProfile?.gender}
                onPress={() =>
                  navigation.navigate(Screens.IDENTITY_SCREEN, { mode: "edit" })
                }
              />
              <View style={styles.line} />
              <UserInfoCard
                title={"Birthday"}
                value={formatted}
                onPress={() =>
                  navigation.navigate(Screens.DOB_SCREEN, { mode: "edit" })
                }
              />
              <View style={styles.line} />
              <UserInfoCard
                title={
                  userProfile.professionData.profession === "Student"
                    ? "Student"
                    : "Work"
                }
                value={userProfile?.professionData.description.trim()}
                onPress={() =>
                  navigation.navigate(Screens.PROFESSION_SCREEN, {
                    mode: "edit",
                  })
                }
              />
              <View style={styles.line} />
              <UserInfoCard
                title={"Life Journey"}
                onPress={() =>
                  navigation.navigate(Screens.LIFE_SCREEN, { mode: "edit" })
                }
              />
            </View>
          </View>
          <View style={styles.accountContainer}>
            <UserInfoCard
              title={"Account & Legal"}
              onPress={() => navigation.navigate(Screens.ACCOUNT_LEGAL_SCREEN)}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setUserImage })(ProfileScreen);
