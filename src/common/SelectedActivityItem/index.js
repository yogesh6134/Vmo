import React, { useCallback, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";
import styles from "./styles";
import { Images } from "@assets/";
import Row from "@common/Row";

export default function SelectedActivity({ data, onRemoveItem }) {
  const [activeItemsData, setActiveItemsData] = useState(data);

  const onValueChange = useCallback((item, index) => {
    item.isShow = !item.isShow;
    activeItemsData[index] = item;
    const updatedActiveItems = [...activeItemsData];
    setActiveItemsData(updatedActiveItems);
    onRemoveItem(updatedActiveItems);
  });

  const activeActivity = activeItemsData.filter((item) => item.isShow);

  const renderItem = (item, index) => {
    return (
      item.isShow && (
        <View key={index} style={styles.activityBox}>
          <View style={styles.activeButton}>
            <Text h14 textDark0>
              {item.name}
            </Text>
            <TouchableOpacity onPress={() => onValueChange(item, index)}>
              <Image source={Images.crossIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    );
  };

  return activeActivity.length <= 0 ? (
    <View style={styles.emptyBox}>
      <View style={styles.emptyBoxInside}>
        <Text h14 textDark3 center>
          Select upto 3 activities
        </Text>
      </View>
    </View>
  ) : (
    <Row style={styles.flatlist}>
      {activeItemsData.map((item, index) => renderItem(item, index))}
    </Row>
  );
}
