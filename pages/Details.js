import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Details = ({ route, navigation }) => {
  const { idReg, titleReg, date, stringDate } = route.params;
  return (
    <View style={style.container}>
      <Text>Regione: {titleReg}</Text>
      <Text>Data: {stringDate}</Text>
    </View>
  );
};
export default Details;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
