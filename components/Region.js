import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import Card from "../components/Card";
import DataContext from "../components/DataContext";

const Region = ({ name, id, color }) => {
  const { setCurrentRegion } = useContext(DataContext);

  const onclickHandler = (title, id) => {
    //console.log(title, id);
    setCurrentRegion({ title, id });
  };

  return (
    <Card
      title={name}
      id={id}
      style={style}
      onClick={onclickHandler}
      color={color}
    />
  );
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
