import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import regioni from "./data/regions.json";

import Home from "./pages/Home";

export default function App() {
  const regions = regioni.map((r) => {
    return { id: r.id, name: r.nome };
  });
  console.log(regions);
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
