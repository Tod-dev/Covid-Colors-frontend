import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Card = ({ title, id, style, onClick, color }) => {
  const cardStyle = StyleSheet.create({
    card: {
      padding: 17,
      backgroundColor: color,
      flex: 1,
      borderRadius: 10,
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontWeight: "bold",
      fontSize: 15,
    },
  });

  return (
    <TouchableOpacity onPress={() => onClick(title, id)}>
      <View style={{ ...style.view, ...cardStyle.card }}>
        <Text style={{ ...style.text, ...cardStyle.text }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
