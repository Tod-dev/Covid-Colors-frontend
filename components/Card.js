import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Card = (props) => {
  //console.log(props);
  const cardStyle = StyleSheet.create({
    card: {
      padding: 17,
      backgroundColor: props.color,
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
    <TouchableOpacity onPress={() => props.onClick(props.reg._id)}>
      <View style={{ ...props.style.view, ...cardStyle.card }}>
        <Text style={{ ...props.style.text, ...cardStyle.text }}>
          {props.reg.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
