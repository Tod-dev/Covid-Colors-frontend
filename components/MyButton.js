import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Colors from "../styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    fontSize: hp("3%"),
    color: "white",
  },
  view: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: hp("1%"),
    padding: hp("1%"),
    borderColor: "black",
    borderWidth: hp("0.8%"),
  },
});
