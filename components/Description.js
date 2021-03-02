import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DescrCard from "../components/DescrCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../styles/Colors";

const Description = (props) => {
  const descObj = props.data;
  const { name, sub } = descObj;
  const color = props.color;

  const style = StyleSheet.create({
    container: {
      margin: wp("10%"),
    },
    title: {
      fontSize: 20,
      color: Colors.regioni[color],
      fontWeight: "bold",
    },
  });

  return (
    <View style={style.container}>
      <Text style={style.title}>{name}</Text>
      {sub.map((d, i) => (
        <DescrCard key={i} val={d.desc} title={d.name} color={color} />
      ))}
    </View>
  );
};

export default Description;
