import React from 'react';
import { FlatList } from 'react-native';
import Color from '@theme/colors';
import { Checkbox, Text, View, Colors } from 'react-native-ui-lib';
import styles from './styles'

export default function CheckBox_Item(props) {
  const data = props.data
  const setData= props.setData

  const renderItem = ({ item, index }) => {

    const onValueChange = () => {
      setData([...data], data[index].isShow = !data[index].isShow);
    }
    return (
      <>
        <View style={styles.boxViews}>
          <Text>{item.name}</Text>
          <Checkbox
            value={item.isShow}
            onValueChange={onValueChange}
            borderRadius={0}
            size={18}
            color={Color.text_dark4}
            iconColor={Colors.white}
            style={styles.checkbox}
          />
        </View>
        <View style={index === data.length - 1 ? null : styles.border} />
      </>
    )
  }

  return (
    <View style={styles.boxView}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  )
}
