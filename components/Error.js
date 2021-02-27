import React from "react";

import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Error = () => {
  return (
    <SafeAreaView style={style.containerError}>
      <Feather name="alert-triangle" size={24} color="red" />
      <Text style={style.error}>
        Impossibile contattare il server, prova a controllare la connessione a
        internet!
      </Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerError: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Error;
