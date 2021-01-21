import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value="lets fucking gooooo !"
      />
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
