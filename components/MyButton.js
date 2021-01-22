import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Colors from "../styles/Colors";

const MyButton = ({ onPress, text1, text2, text3, text4 }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.view}>
        <Text style={{ color: "white" }}>
          <Text>{text1}</Text>
          <Text style={style.important}>{text2}</Text>
          <Text>{text3}</Text>
          <Text style={style.important}>{text4}</Text> ➡
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const style = StyleSheet.create({
  important: {
    fontWeight: "bold",
    fontSize: 18,
  },
  view: {
    backgroundColor: Colors.special,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
});
