import React from "react";

import { SafeAreaView, Text, StyleSheet } from "react-native";

const Error = () => {
  return (
    <SafeAreaView style={style.containerError}>
      <Text style={style.error}>
        Impossibile contattare il server, prova a controllare la connessione a
        internet! ⚠
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
