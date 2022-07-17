import { View, ImageBackground, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-ui-lib";
import Button from "@common/Button";
import { Images } from "../../../../../assets";
import { styles } from "./styles";
import CustomRadioButton from "@common/CustomRadioButton";
import { IdentityList } from "@mock/identityList";
import Header from "@common/Header";
import { Screens } from "@constants/";
import { setGender } from "@actions/User";
import { connect } from "react-redux";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import { logEvent, logUserProperties } from "@utils/helper";

const IdentityScreen = ({ navigation, route, userProfile, setGender }) => {
  const [selected, setSelected] = useState(userProfile.gender ?? "");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mode } = route?.params;
  const user = auth.currentUser;

  const onPress = async () => {
    if (selected === "") {
      setError(true);
      return;
    }
    setGender(selected);
    if (mode === "edit") {
      setLoading(true);
      const res = await Services.UserServices.updateGender(user.uid, selected);
      if (res !== "failed") {
        navigateToProfile(navigation);
        return;
      }
      setLoading(false);
      alert("Something went wrong!");
      return;
    }
    logEvent("Signup - Gender");
    logUserProperties({ Gender: selected });
    navigation.navigate(Screens.PROFESSION_SCREEN, { mode: "onboarding" });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.container}>
        <Header
          onPress={() => {
            if (mode === "edit") {
              navigateToProfile(navigation);
              return;
            }
            navigation.goBack();
          }}
        />
        <View style={styles.itemArrange}>
          <Text hb28 textDark0>
            How do you identify?
          </Text>
          <Text h16 textDark2 style={styles.descriptionText}>
            Weekend is a safe space for everyone.
          </Text>
          <View style={styles.listWrapper}>
            <View style={styles.list}>
              <FlatList
                alwaysBounceVertical={false}
                keyExtractor={(item) => item.id.toString()}
                data={IdentityList}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      setError(false);
                      setSelected(item.gender);
                    }}
                  >
                    <CustomRadioButton
                      selected={item.gender === selected}
                      setSelected={() => {
                        setError(false);
                        setSelected(item.gender);
                      }}
                      value={item.title}
                    />
                  </Pressable>
                )}
                ItemSeparatorComponent={() => <View style={styles.line} />}
              />
            </View>
          </View>
          {error && (
            <Text h14 style={styles.errorText}>
              Please select an option
            </Text>
          )}
        </View>
        <Button
          isLoading={loading}
          text={mode === "edit" ? "Save" : "Next"}
          type={"primary"}
          size={"large"}
          round={12}
          style={styles.button}
          onPress={onPress}
        />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setGender })(IdentityScreen);
