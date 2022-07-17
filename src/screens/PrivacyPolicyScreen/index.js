import Header from "@common/Header";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { policy } from "@mock/privacyPolicy";
import { Text } from "react-native-ui-lib";
import Row from "@common/Row";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import Color from "@theme/colors";

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Row style={{ backgroundColor: Color.white }}>
        <Header onPress={() => navigation.goBack()} />
        <Text h18 style={styles.heading}>
          Privacy Policy
        </Text>
      </Row>
      <WebView
        originWhitelist={["*"]}
        source={{ html: policy }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;
