import React from "react";

import { SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";

const Loading = ({ color }) => {
  return (
    <SafeAreaView style={style.container}>
      <ActivityIndicator size="large" color={color} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
});

export default Loading;
