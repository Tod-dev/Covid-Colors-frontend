import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../styles/Colors";

const Card = ({ title, id, style, onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick(title, id)}>
      <View style={{ ...style.view, ...cardStyle.card }} onc>
        <Text style={{ ...style.text, ...cardStyle.text }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const cardStyle = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: Colors.primary,
    flex: 1,
    borderRadius: 10,
    margin: 5,
    maxWidth: 223,
    maxHeight: 150,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
