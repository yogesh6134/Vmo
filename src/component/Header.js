import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FONT_SIZE, HEIGHT, SPACING, WIDTH } from '../themes/Constants'
import Color from '../themes/Colors'
import Images from '../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onBackPress}>
      <Image source={Images.back} style={styles.backButton}/>
      </TouchableOpacity>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text>{props.icon}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.white,
    height: SPACING.h50,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.txtDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: SPACING.v15
  },
  backButton: {
    height: HEIGHT.h25,
    width: WIDTH.w25,
    tintColor: Color.green
  },
  heading: {
    fontSize: FONT_SIZE.f20,
    color: Color.green
  }
})