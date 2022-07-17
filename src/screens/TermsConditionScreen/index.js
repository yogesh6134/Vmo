import React from "react";
import Header from "@common/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { terms } from "@mock/terms";
import Row from "@common/Row";
import { Text } from "react-native-ui-lib";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import Color from "@theme/colors";

const TermsConditionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Row style={{ backgroundColor: Color.white }}>
        <Header onPress={() => navigation.goBack()} />
        <Text h18 style={styles.heading}>
          Terms of Use
        </Text>
      </Row>
      <WebView
        originWhitelist={["*"]}
        source={{ html: terms }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TermsConditionScreen;
