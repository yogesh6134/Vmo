import { KeyboardAvoidingView, Platform } from "react-native";
import React from "react";

const KeyboardWrapper = ({ style, children, behavior, props }) => {
  return (
    <KeyboardAvoidingView
      style={style}
      behavior={
        behavior ? behavior : Platform.OS === "ios" ? "padding" : "height"
      }
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardWrapper;
