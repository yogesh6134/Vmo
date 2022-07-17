import { View, ImageBackground, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Images } from "../../../../../assets";
import Header from "@common/Header";
import Button from "@common/Button";
import { Text } from "react-native-ui-lib";
import CustomCheckbox from "@common/CustomCheckbox";
import { InterestList } from "@mock/interestList";
import { Screens } from "@constants/";
import { setUserInterest } from "@actions/User";
import { connect } from "react-redux";
import { navigateToProfile } from "@utils/navigation";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";

const InterestScreen = ({
  navigation,
  route,
  userProfile,
  setUserInterest,
}) => {
  const filteredInterest = InterestList.map((item) => {
    return {
      id: item.id,
      name: item.name,
      isShow:
        userProfile.userInterest !== null
          ? userProfile.userInterest.some((i) => i.label === item.label)
          : item.isShow,
      label: item.label,
    };
  });

  const [list, setList] = useState(filteredInterest);
  const [loading, setLoading] = useState(false);
  const { mode } = route.params;
  const user = auth.currentUser;
  const checkboxDisabled = list?.filter((lItem) => lItem?.isShow)?.length >= 5;

  const onPress = async () => {
    const filteredInterestList = list.filter((item) => item.isShow === true);
    if (filteredInterestList.length <= 5) {
      setUserInterest(list);
      if (mode === "edit") {
        setLoading(true);
        const res = await Services.UserServices.updateUserInterest(
          user.uid,
          list
        );
        if (res !== "failed") {
          navigateToProfile(navigation);
          return;
        }
        setLoading(false);
        alert("Something went wrong!");
        return;
      }
      navigation.navigate(Screens.LOCATION_PERMISSION_SCREEN);
    }
  };

  const handleIsShow = (item) => {
    const selectedIndex = list.findIndex((i) => i.name === item.name);
    list[selectedIndex].isShow = !list[selectedIndex].isShow;
    setList([...list]);
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemArrange}
        >
          <Text hb28 textDark0>
            What are some of your {"\n"}
            interests?
          </Text>
          <Text h16 textDark2 style={styles.descriptionText}>
            Pick upto 5 so we can find you the best groups {"\n"}
            and activities!
          </Text>
          <View style={styles.listWrapper}>
            <View style={styles.list}>
              {list.map((item) => {
                return (
                  <View key={item.id}>
                    <Pressable
                      onPress={() => handleIsShow(item)}
                      disabled={checkboxDisabled && !item?.isShow}
                    >
                      <CustomCheckbox
                        value={item}
                        handleChange={handleIsShow}
                        disabled={checkboxDisabled && !item?.isShow}
                      />
                    </Pressable>
                    <View style={styles.line} />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <Button
          isLoading={loading}
          text={mode === "edit" ? "Save" : "Next"}
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

export default connect(mapStateToProps, { setUserInterest })(InterestScreen);
