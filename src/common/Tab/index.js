import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Text, View } from "react-native-ui-lib";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import Row from "../Row";
import Color from "@theme/colors";
import { logEvent } from "@utils/helper";

const TabButton = ({
  name,
  selected,
  setSelected,
  setIndex,
  notificationCount,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelected(name);
        setIndex(name.toLowerCase());
        if (name === "My People") {
          logEvent("Go to - People Section");
          return;
        }
        logEvent("Go to - Groups Section");
      }}
    >
      <LinearGradient
        colors={
          selected === name
            ? [Color.gradientOrange3, Color.gradientOrange2]
            : [Color.pink, Color.pink]
        }
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0.7, y: 1 }}
        style={selected === name ? styles.tabButtonSelected : styles.tabButton}
      >
        <Row>
          <Text
            hb14
            style={selected === name ? styles.selectedText : styles.text}
          >
            {name}
          </Text>
          {name === "My People" && notificationCount > 0 && (
            <View style={styles.notification}>
              <Text style={styles.notificationText}>{notificationCount}</Text>
            </View>
          )}
        </Row>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const Tab = ({
  tabNames,
  initialIndex,
  setIndex,
  style,
  notificationCount,
}) => {
  const [selected, setSelected] = useState(tabNames[initialIndex]);

  return (
    <Row style={[styles.tabContainer, style]}>
      {tabNames.map((tabItem, index) => (
        <TabButton
          key={`${index}${tabItem}`}
          name={tabItem}
          selected={selected}
          setSelected={setSelected}
          setIndex={setIndex}
          notificationCount={notificationCount}
        />
      ))}
    </Row>
  );
};

export default Tab;
