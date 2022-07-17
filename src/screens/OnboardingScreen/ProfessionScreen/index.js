import { View, ImageBackground, Pressable } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-ui-lib";
import Button from "@common/Button";
import { Images } from "../../../../../assets";
import { styles } from "./styles";
import CustomRadioButton from "@common/CustomRadioButton";
import { ProfessionList } from "@mock/professionList";
import Header from "@common/Header";
import TextInput from "@common/TextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Screens } from "@constants/";
import { setUserProfession } from "@actions/User";
import { connect } from "react-redux";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import { logEvent, logUserProperties } from "@utils/helper";

const ProfessionScreen = ({
  navigation,
  route,
  userProfile,
  setUserProfession,
}) => {
  const [selected, setSelected] = useState(
    userProfile.professionData.profession ?? ""
  );
  const [focused, setFocused] = useState(false);
  const [profession, setProfession] = useState(
    selected === "Employed" ? userProfile.professionData.description : ""
  );
  const [study, setStudy] = useState(
    selected === "Student" ? userProfile.professionData.description : ""
  );

  const [loading, setLoading] = useState(false);
  const { mode } = route.params;
  const user = auth.currentUser;

  const onPress = async () => {
    setUserProfession({ selected, study, profession });
    if (mode === "edit") {
      setLoading(true);
      const res = await Services.UserServices.updateProfession(
        user.uid,
        selected,
        study,
        profession
      );
      if (res !== "failed") {
        navigateToProfile(navigation);
        return;
      }
      setLoading(false);
      alert("Something went wrong!");
      return;
    }
    logEvent("Signup - Career");
    logUserProperties({
      Career: selected,
      "Career Text":
        selected === "Employed"
          ? profession
          : selected === "Student"
          ? study
          : "",
    });
    navigation.navigate(Screens.LIFE_SCREEN, { mode: "onboarding" });
  };

  const handleSelection = () => {
    if (selected === "Student") {
      return (
        <View>
          <Text hb28 textDark0 marginT-32>
            Where are you studying?
          </Text>
          <TextInput
            placeholder="I’m a student at..."
            value={study}
            validateOnBlur
            maxLength={20}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            isFocused={focused}
            onChangeText={(value) => setStudy(value)}
          />
        </View>
      );
    }

    if (selected === "Employed") {
      return (
        <View>
          <Text hb28 textDark0 marginT-32>
            What do you do?
          </Text>
          <TextInput
            placeholder="I’m a..."
            value={profession}
            validateOnBlur
            maxLength={20}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            isFocused={focused}
            onChangeText={(value) => setProfession(value)}
          />
        </View>
      );
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraHeight={250}
      scrollEnabled={false}
    >
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
            Where are you in your {"\n"}professional life?
          </Text>
          <View style={styles.listWrapper}>
            <View style={styles.list}>
              {ProfessionList?.map((item, index) => (
                <View key={item.id.toString()}>
                  <Pressable
                    onPress={() => {
                      setSelected(item.label);
                    }}
                  >
                    <CustomRadioButton
                      selected={item.label === selected}
                      setSelected={() => {
                        setSelected(item.label);
                      }}
                      value={item.title}
                    />
                  </Pressable>
                  {index !== ProfessionList.length - 1 && (
                    <View style={styles.line} />
                  )}
                </View>
              ))}
            </View>
          </View>
          {handleSelection()}
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
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setUserProfession })(
  ProfessionScreen
);
