import { View, ImageBackground, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Images } from "../../../../assets";
import Header from "@common/Header";
import Button from "@common/Button";
import Color from "@theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Screens } from "@constants/";
import * as Navigation from "@utils/navigation";

const FinishScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.itemArrange}>
          <MaskedView
            style={{ flex: 1, height: "100%" }}
            maskElement={
              <Text style={styles.text}>Here’s how {"\n"}Weekend works</Text>
            }
          >
            <LinearGradient
              colors={[Color.gradientOrange3, Color.gradientOrange2]}
              style={{ flex: 1 }}
              locations={[0, 1]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0 }}
            />
          </MaskedView>
        </View>
        <Button
          text={"Next"}
          type={"primary"}
          size={"large"}
          round={12}
          onPress={() => {
            Navigation.reset(navigation, Screens.HOME_SCREEN);
          }}
          style={styles.button}
        />
      </ImageBackground>
    </View>
  );
};

export default FinishScreen;
