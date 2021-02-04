import React, { useEffect, useState } from "react";

import { Text, StyleSheet, View } from "react-native";

import Colors from "../styles/Colors";

const Description = (props) => {
  const colors = { rossa: "🔴", arancione: "🟠", gialla: "🟡", bianca: "⚪" };
  const [punto, setPunto] = useState("");
  const [text, setText] = useState([]); // 0-> prop , 1 -> text
  //console.log(props.data);
  useEffect(() => {
    let key;
    for (key in props.data) {
      setText([key, props.data[key]]);
    }
    setPunto(colors[props.color]);
  }, []);

  if (text[1] === "") {
    return <View></View>;
  }

  return (
    <View style={style.container}>
      <Text>
        <Text style={style.punto}>{punto} </Text>
        <Text style={style.descrizione}> {text[0]}</Text>{" "}
      </Text>
      <Text style={style.text}>{text[1]}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  punto: {
    fontSize: 20,
  },
  text: {
    color: Colors.text,
    fontWeight: "bold",
  },
  descrizione: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Description;
