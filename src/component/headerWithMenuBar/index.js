import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../assets';

export default function HeaderWithMenuBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSideHeader}>
        <Text style={styles.headerText}>VMO</Text>
      </View>
      <View style={styles.rightSideHeader}>
        <TouchableOpacity onPress={props.onPressHome}>
          <Image source={props.firstIcon} style={props.firsticonstyle} />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onNotification}>
          <Image source={props.secondIcon} style={props.secondiconstyle} />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPressMenu}>
          <Image source={props.thirdIcon} style={props.thirdiconstyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
