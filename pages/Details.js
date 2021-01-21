import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Details = () => {
  return (
    <View style={style.container}>
      <Text>Details Page</Text>
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
