import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import regioni from "../data/regions.json";

const Home = ({ navigation }) => {
  const regions = regioni.map((r) => ({ id: r.id, name: r.nome }));
  return (
    <View style={style.container}>
      <Text style={style.text}>Home Page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
export default Home;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 30,
  },
});
