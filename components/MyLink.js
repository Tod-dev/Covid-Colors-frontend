import React from "react";
import { Text, StyleSheet } from "react-native";

import * as Linking from "expo-linking";
import Colors from "../styles/Colors";

const MyLink = (props) => {
  const { linkName, url, inAppUrl, navigation } = props;
  const handlePress = () => {
    if (url) Linking.openURL(url);
    if (inAppUrl) navigation.navigate(inAppUrl);
  };

  return (
    <Text style={style.text} onPress={() => handlePress()}>
      {linkName}
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    textAlign: "center",
    marginHorizontal: 15,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});

export default MyLink;
