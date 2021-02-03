import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import Card from "../components/Card";
import DataContext from "../components/DataContext";

const Region = (props) => {
  const { currentRegion, setCurrentRegion } = useContext(DataContext);

  const onclickHandler = (id) => {
    //console.log(title, id);
    if (currentRegion && currentRegion === id) setCurrentRegion(undefined);
    else setCurrentRegion(id);
  };

  return (
    <Card
      reg={props.reg}
      style={style}
      onClick={onclickHandler}
      color={props.color}
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
