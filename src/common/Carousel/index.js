import React from "react";
import { Carousel as Caro, Text } from "react-native-ui-lib";
import { Images } from "../../../../assets";
import { styles } from "./styles";
import { View, ImageBackground, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "@common/Button";
import Color from "@theme/colors";
import Row from "@common/Row";

const Carousel = ({ onPress, onPressTerms, onPressPolicy }) => {
  const pages = [
    {
      id: 1,
      Image: Images.splash1,
      title: "Make new friends IRL",
      desc: "Find local people every weekend",
    },
    {
      id: 2,
      Image: Images.splash2,
      title: "Explore new hobbies",
      desc: "Discover what your city has to offer",
    },
    {
      id: 3,
      Image: Images.splash3,
      title: "Find local groups",
      desc: "Team up for anything",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image source={Images.weekend} style={styles.appLogo} />

      <Caro
        containerStyle={styles.container}
        pageControlProps={{
          size: 5,
          inactiveColor: Color.Secondary_Black,
          color: Color.primary_main,
          containerStyle: {
            bottom: 135,
            alignSelf: "center",
          },
        }}
        pageControlPosition={["over"]}
      >
        {pages.map((item) => {
          return (
            <ImageBackground
              key={item.id}
              source={item.Image}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.itemArrange}>
                <Text white hb28>
                  {item.title}
                </Text>
                <Text white h16>
                  {item.desc}
                </Text>
              </View>
            </ImageBackground>
          );
        })}
      </Caro>
      <Button
        text={"Let’s get started"}
        type={"primary"}
        size={"large"}
        round={12}
        style={styles.button}
        onPress={onPress}
      />
      <Row style={styles.text}>
        <Pressable onPress={onPressTerms}>
          <Text h14 white>
            Terms of Use
          </Text>
        </Pressable>
        <Pressable onPress={onPressPolicy}>
          <Text h14 white>
            Privacy Policy
          </Text>
        </Pressable>
      </Row>
    </View>
  );
};

export default Carousel;
