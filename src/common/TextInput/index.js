import React, { forwardRef } from "react";
import { Platform, Dimensions } from "react-native";
import { Incubator } from "react-native-ui-lib";
import { SPACING } from "../../../themes/constants";
import { styles } from "./styles";
import Color from "@theme/colors";

const { TextField } = Incubator;
const { width } = Dimensions.get("window");

const TextInput = forwardRef(
  (
    {
      value,
      placeholder,
      onChangeText,
      onFocus,
      onBlur,
      enableErrors,
      isFocused,
      error,
      customWidth,
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        value={value}
        containerStyle={[
          styles.container,
          { width: customWidth ? customWidth : width - 32 },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        floatingPlaceholder
        floatingPlaceholderStyle={styles.floatingPlaceholderStyle}
        floatingPlaceholderColor={{
          focus: Color.text_dark3,
          default: Color.text_dark3,
          error: Color.text_dark3,
        }}
        enableErrors={enableErrors}
        color={Color.text_dark0}
        fieldStyle={{
          borderBottomWidth: isFocused ? 2 : 1,
          borderColor: error
            ? Color.red2
            : isFocused
            ? Color.primary_main
            : Color.text_dark0,
        }}
        selectionColor={Color.primary_main}
        style={{
          marginTop: Platform.OS === "ios" ? 5 : 0,
          height: 26,
        }}
        {...props}
      />
    );
  }
);

export default TextInput;
