import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import { connect } from "react-redux";
import ActivityCheckbox from "@common/ActivityCheckbox";
import { ActivityCheckboxItem } from "@mock/activiyCheckboxItem";

import Color from "@theme/colors";
import { GroupListData } from "@mock/groupListData";
import BottomSheetProfile from "@common/BottomSheetProfile";
import BottomSheet from "@common/BottomSheet";
import UserGrouplist from "@common/UserGroupList";
import { MyGroupList } from "@mock/myGroupList";

const ExampleScreen = ({ navigation }) => {
  const [data, setData] = useState([
    { name: "🎲 Board Games", isShow: false },
    { name: "🍕 Foodie", isShow: false },
    { name: "🌲 Outdoor adventures", isShow: false },
    { name: "💃 Nightlife", isShow: false },
    { name: "🎲 Board Games", isShow: false },
  ]);
  const bottomSheetRef = useRef(null);
  const [snapPoints, setSnapPoints] = useState(["80%"]);
  const [dataVal, setDataVal] = useState(GroupListData);
  const [isShowDetail, setIsShowDetail] = useState(true);
  const [indexVal, setIndexVal] = useState(-1);

  const onExpand = () => {
    bottomSheetRef.current?.expand();
  };

  const onClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.text_dark4,
      }}
    >
      <Text h28 Secondary_Black center>
        ExampleScreen 01
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("CHAT_SCREEN")}>
        <Text h28 Secondary_Black center marginT-20>
          ExampleScreen 01
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onExpand}>
        <Text h28 Secondary_Black center marginT-20>
          ExampleScreen 01
        </Text>
      </TouchableOpacity>
      <UserGrouplist data={MyGroupList} />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        style={{ paddingBottom: 200 }}
      >
        <BottomSheetProfile
          onClose={onClose}
          buttonText="Add friend"
          userName="Daniel"
          profession="Software Engineer, 37"
          looking="Daniel is currently looking for board games, hiking or book clubs."
          bio="I’m really into Chipotle. I like walks, runs and anything outdoorsy.
          You can usually catch me at the bars on Friday evening and the park
          on Saturday morning."
          LookingOption={GroupListData}
        />
      </BottomSheet>
    </View>
  );
};

const mapStateToProps = (state) => ({
  example: state.exampleReducer.example,
});

export default connect(mapStateToProps)(ExampleScreen);
