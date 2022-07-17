import { View, ImageBackground, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Images } from "../../../../../assets";
import Header from "@common/Header";
import Button from "@common/Button";
import { Text } from "react-native-ui-lib";
import CustomCheckbox from "@common/CustomCheckbox";
import { LifeJourneyList } from "@mock/lifeJourneyList";
import { Screens } from "@constants/";
import { setLifeJourney } from "@actions/User";
import { connect } from "react-redux";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import { logEvent } from "@utils/helper";

const LifeScreen = ({ navigation, route, setLifeJourney, userProfile }) => {
  const filteredJourney = LifeJourneyList.map((item) => {
    return {
      id: item.id,
      name: item.name,
      label: item.label,
      isShow:
        userProfile.lifeJourneyData !== null
          ? userProfile.lifeJourneyData.some((i) => i.label === item.label)
          : item.isShow,
    };
  });

  const [list, setList] = useState(filteredJourney);
  const [loading, setLoading] = useState(false);
  const { mode } = route.params;
  const user = auth.currentUser;
  const filteredList = list.filter((item) => item.isShow === true);

  const handleIsShow = (item) => {
    const selectedIndex = list.findIndex((i) => i.name === item.name);
    list[selectedIndex].isShow = !list[selectedIndex].isShow;
    setList([...list]);
  };

  const onPress = async () => {
    setLifeJourney(list);

    if (mode === "edit") {
      setLoading(true);
      const res = await Services.UserServices.updateLifeJourney(
        user.uid,
        filteredList
      );
      if (res !== "failed") {
        navigateToProfile(navigation);
        return;
      }
      setLoading(false);
      alert("Something went wrong!");
      return;
    }
    logEvent("Signup - Life Journey");
    navigation.navigate(Screens.INTEREST_SCREEN, { mode: "onboarding" });
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
            What’s relevant to your {"\n"}
            life journey right now?
          </Text>
          <Text h16 textDark2 style={styles.descriptionText}>
            This helps us match you with people who can {"\n"}
            relate to your specific situation.
          </Text>
          <View style={styles.listWrapper}>
            <View style={styles.list}>
              <FlatList
                alwaysBounceVertical={false}
                keyExtractor={(item) => item.id.toString()}
                data={list}
                renderItem={({ item }) => (
                  <Pressable onPress={() => handleIsShow(item)}>
                    <CustomCheckbox value={item} handleChange={handleIsShow} />
                  </Pressable>
                )}
                ItemSeparatorComponent={() => <View style={styles.line} />}
              />
            </View>
          </View>
        </View>
        <Button
          isLoading={loading}
          text={
            mode === "edit"
              ? "Save"
              : filteredList.length > 0
              ? "Next"
              : "None of these"
          }
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

export default connect(mapStateToProps, { setLifeJourney })(LifeScreen);
