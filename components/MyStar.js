import React, { useState } from "react";
import { View, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { storeData } from "../data/localStorage";
import config from "../data/config";

const MyStar = ({ name, color, reg }) => {
  const [myname, setName] = useState(name);
  return (
    <View style={{ marginHorizontal: 30 }}>
      <AntDesign
        name={myname}
        size={24}
        color={color}
        style
        onPress={() => {
          if (myname === "staro") {
            //set region
            Alert.alert(
              "Modifica regione preferita",
              reg.name + " è la tua nuova regione preferita!"
            );
            setName("star");
            storeData(config.starredReg, reg.name);
          } else {
            Alert.alert(
              "Modifica regione preferita",
              reg.name + " non è più la tua regione preferita!"
            );
            setName("staro");
            storeData(config.starredReg, "");
          }
        }}
      />
    </View>
  );
};

export default MyStar;
