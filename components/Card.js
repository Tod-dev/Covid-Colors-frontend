import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Card = (props) => {
  const cardStyle = StyleSheet.create({
    card: {
      padding: hp("1%"),
      backgroundColor: props.color,

      borderRadius: 10,
      margin: hp("0.5%"),
    },
    text: {
      fontWeight: "bold",
      fontSize: hp("2%"),
      color: "white",
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity onPress={() => props.onClick(props.reg._id)}>
      <View style={cardStyle.card}>
        <Text style={cardStyle.text}>{props.reg.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
