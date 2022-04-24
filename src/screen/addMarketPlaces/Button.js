import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT_SIZE, SPACING, WIDTH} from '../../themes/Constants';
import Color from '../../themes/Colors';

export default function Button(props) {
  return (
    <View>
      <Text
        style={{
          backgroundColor: Color.white,
          paddingHorizontal: SPACING.v15,
          paddingVertical: SPACING.v8,
          marginVertical: SPACING.v10,
          width: WIDTH.w140,
          alignSelf: 'flex-end',
          textAlign: 'center',
          marginRight: SPACING.v15,
          elevation: 5,
          borderRadius: SPACING.v8,
          color: props.color,
          fontSize: FONT_SIZE.f13,
        }}
        onPress={() => alert('success')}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
