import React from "react";
import { StyleSheet } from "react-native";

import Card from "../components/Card";

const Region = ({ name, id, onClickHandler }) => {
  return <Card title={name} id={id} style={style} onClick={onClickHandler} />;
};
export default Region;

const style = StyleSheet.create({
  view: {
    margin: 5,
  },
  text: {
    color: "white",
  },
});
