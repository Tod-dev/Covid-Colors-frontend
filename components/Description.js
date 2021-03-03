import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import DescrCard from "../components/DescrCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../styles/Colors";
import Collapsible from "react-native-collapsible";
import { Octicons } from "@expo/vector-icons";

const Description = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const descObj = props.data;
  const { name, sub, img } = descObj;
  const color = props.color;

  const style = StyleSheet.create({
    container: {
      margin: wp("10%"),
    },
    title: {
      fontSize: wp("5%"),
      color: Colors.regioni[color],
      fontWeight: "bold",
    },
    row: {
      flexDirection: "row",
    },
    img: {
      width: wp("50%"),
      height: hp("20%"),
    },
  });

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <TouchableOpacity onPress={handleCollapse}>
      <View style={style.container}>
        <View style={style.row}>
          <Octicons name="primitive-dot" size={24} color={Colors.primary} />
          <Text style={style.title}> {name}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={style.img}
            source={{
              uri: img,
            }}
          />
        </View>
        {sub.map((d, i) => (
          <Collapsible key={i} collapsed={isCollapsed}>
            <DescrCard val={d.desc} title={d.name} color={color} />
          </Collapsible>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default Description;
