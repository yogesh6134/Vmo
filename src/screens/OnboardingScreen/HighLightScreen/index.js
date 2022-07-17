import { ImageBackground, View } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-ui-lib";
import { styles } from "./styles";
import Header from "@common/Header";
import { Images } from "@assets/";
import HighLightCard from "@common/HighLightCard";
import { SelectedHighLight } from "@mock/selectedHighLight";
import Button from "@common/Button";
import { Screens } from "@constants/";
import { connect } from "react-redux";
import { SPACING } from "@theme/constants";
import { setHighlight } from "@actions/User";
import { logEvent } from "@utils/helper";

const HighLightScreen = ({ navigation, userProfile, setHighlight }) => {
  const [list, setList] = useState(SelectedHighLight);
  const selectedLength = list.filter((lItem) => lItem.active).length;

  const handleCardSelection = (id, item) => {
    item.active = !item.active;
    list[id] = item;
    const updateList = [...list];
    setList(updateList);
  };

  const handleNext = () => {
    setHighlight(list);
    logEvent("Signup - Purpose");
    navigation.navigate(Screens.DOB_SCREEN, { mode: "onboarding" });
  };

  return (
    <ImageBackground source={Images.background} style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <Text hb28 textDark0 style={styles.text}>
        What brings you{"\n"}
        to Weekend, {userProfile.firstName}?
      </Text>
      <Text h16 textDark2 style={styles.descriptionText}>
        Select as many as you want!
      </Text>

      <View style={styles.listContainer}>
        {list.map((item, index) => {
          return (
            <HighLightCard
              key={item.id}
              image={item.active ? item.colorImage : item.fadedImage}
              title={item.title}
              status={item.active}
              onPress={() => handleCardSelection(index, item)}
            />
          );
        })}
      </View>
      {selectedLength > 0 && (
        <Button
          text={"Next"}
          type={"primary"}
          size={"large"}
          round={12}
          style={styles.button}
          onPress={handleNext}
        />
      )}
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
});

export default connect(mapStateToProps, { setHighlight })(HighLightScreen);
