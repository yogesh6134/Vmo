import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import CustomFastImage from "@common/CustomFastImage";
import Row from "@common/Row";
import { Text } from "react-native-ui-lib";
import { SPACING } from "@theme/constants";

const Avatarlist = ({
  data,
  overflowLabelStyle,
  backgroundColor,
  numFaces,
  onAvatarPress,
}) => {
  const filteredFaces = data.filter((item, index) => index >= numFaces);
  const initialZIndex = 100;
  return (
    <TouchableOpacity onPress={onAvatarPress} activeOpacity={0.8}>
      <View style={[styles.avatarView, { backgroundColor: backgroundColor }]}>
        <Row>
          {data.map((face, index) => {
            if (index < numFaces) {
              return (
                <CustomFastImage
                  key={face.id}
                  uri={face.imageUrl}
                  style={[
                    styles.avatar,
                    {
                      zIndex:
                        index === 0
                          ? initialZIndex
                          : initialZIndex - index * 10,
                      marginLeft: index === 0 ? 0 : -SPACING.h12,
                    },
                  ]}
                />
              );
            }
          })}
          {data.length <= numFaces ? null : (
            <Text hb12 style={styles.count}>
              +{filteredFaces.length}
            </Text>
          )}
        </Row>
      </View>
    </TouchableOpacity>
  );
};

export default Avatarlist;
