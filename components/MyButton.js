import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Colors from "../styles/Colors";

const MyButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.view}>
        <Text style={style.important}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const style = StyleSheet.create({
  important: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  view: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 15,
    padding: 15,
    borderColor: "black",
    borderWidth: 10,
  },
});
