import React, { useCallback, useState } from "react";
import Color from "@theme/colors";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Checkbox, Text, View, Colors, Image } from "react-native-ui-lib";
import styles from "./styles";
import TextGradientWrapper from "@common/TextGradientWrapper";
import SelectedActivity from "@common/SelectedActivityItem";
import CustomFastImage from "@common/CustomFastImage";
import { TouchableWithoutFeedback } from "react-native";

export default function ActivityCheckbox({ data }) {
  const [itemsData, updateData] = useState(data);

  const activeActivity = itemsData.filter((item) => item.isShow);

  const onValueChange = useCallback((item, index) => {
    if (activeActivity.length <= 2) {
      item.isShow = !item.isShow;
      itemsData[index] = item;
      updateData([...itemsData]);
    } else if (item.isShow === true) {
      item.isShow = false;
      itemsData[index] = item;
      updateData([...itemsData]);
    } else {
      alert("You can select only 3 activities");
    }
  });

  const onDataRemove = (activeListData) => {
    updateData(activeListData);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => onValueChange(item, index)}>
        <View style={styles.insideBox}>
          <CustomFastImage uri={item.icon} style={styles.icon} />
          <View style={styles.insideRightSideBox}>
            <View>
              <Text h14 textDark0>
                {item.name}
              </Text>
              <View style={styles.insideBoxButton}>
                <View style={styles.intrestedButton}>
                  <Text h10 green>
                    {item.interested}
                  </Text>
                </View>
              </View>
            </View>
            <Checkbox
              value={item.isShow}
              onValueChange={() => onValueChange(item, index)}
              size={25}
              style={styles.checkbox}
              color={item.isShow ? Color.primary_main : Color.text_dark4}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.boxView}>
      <View style={styles.headingContainer}>
        <TextGradientWrapper>
          <Text hb14>Selected Activities</Text>
        </TextGradientWrapper>
      </View>
      <SelectedActivity data={itemsData} onRemoveItem={onDataRemove} />
      <View style={styles.headingContainer}>
        <TextGradientWrapper>
          <Text hb14>Available Activities</Text>
        </TextGradientWrapper>
      </View>
      <BottomSheetFlatList
        data={itemsData}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.border} />}
        ListFooterComponent={() => <View style={styles.footerView} />}
      />
    </View>
  );
}
