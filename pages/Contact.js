import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Mylink from "../components/MyLink";

import config from "../data/config";

const Contact = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Per maggiori informazioni visitare il sito del governo al seguente link:
      </Text>
      <Mylink linkName={config.nomeSitoGov} url={config.linkSitoGov} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: { textAlign: "center", marginVertical: 15 },
});

export default Contact;
