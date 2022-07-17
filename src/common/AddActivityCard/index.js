import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";

import styles from "./styles";
import Row from "@common/Row";
import { Images } from "@assets/";
import { SPACING } from "@theme/constants";

const AddActivityCard = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Row>
          <View style={styles.plusContainer}>
            <Image source={Images.plus} />
          </View>
          <View style={{ marginLeft: SPACING.h15 }}>
            <Text hb16 textDark2>
              Add activity
            </Text>
            <Text h12 style={styles.descriptionText}>
              Adding more options gives you better chances on finding the
              perfect matches
            </Text>
          </View>
        </Row>
      </TouchableOpacity>
    </View>
  );
};

export default AddActivityCard;
