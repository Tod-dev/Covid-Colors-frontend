import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DescrCard = ({ val, title, color }) => {
  if (!val) {
    return <View></View>;
  }

  return (
    <View style={style.container}>
      <View style={style.row}>
        <Octicons
          name="primitive-dot"
          size={24}
          color={Colors.regioni[color]}
        />
        <Text style={style.descrizione}> {title}</Text>
      </View>
      <Text style={style.text}>{val}</Text>
    </View>
  );
};

export default DescrCard;

const style = StyleSheet.create({
  container: {
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
  text: {
    color: Colors.text,
    fontWeight: "bold",
  },
  descrizione: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
});
