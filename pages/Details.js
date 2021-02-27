import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Colors from "../styles/Colors";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Description from "../components/Description";
import { getZoneByColor } from "../services/colors";
import { ScrollView } from "react-native-gesture-handler";
import NetInfo from "@react-native-community/netinfo";

const Details = ({ route }) => {
  const [error, setError] = useState(false);
  const [description, setDescription] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textZone: {
      color: Colors.regioni[route.params.reg.color],
      fontWeight: "bold",
      fontSize: 30,
    },
    rt: {
      fontWeight: "bold",
      color: Colors.regioni[route.params.reg.color],
      fontSize: 25,
    },
    rtTitle: {
      fontWeight: "bold",
      fontSize: 25,
    },
  });

  const { reg } = route.params;
  const { color } = reg;

  useEffect(() => {
    const getData = async () => {
      //console.log("im in");
      let res = await getZoneByColor(color);
      if (!res.ok) {
        setError(true);
      } else {
        res = await res.json();
        //console.log(res.description);

        const newArray = [];
        for (let key in res.description) {
          //console.log(key);
          if (!res.description.hasOwnProperty(key)) continue;

          let obj = { [key]: res.description[key] };
          newArray.push(obj);
        }
        //console.log(newArray);
        setDescription(newArray);
      }
      setIsLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) setError(true);
    });
  }, []);
  if (isLoading) {
    return <Loading color={Colors.regioni[color]} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={style.container}>
      <Text style={style.textZone}>Zona {color}</Text>
      {/*     <Text>
        <Text style={style.rtTitle}>RT = </Text>
        <Text style={style.rt}>{rt}</Text>
      </Text> 
*/}
      <ScrollView>
        {description.map((obj, id) => (
          <Description data={obj} key={id} color={color} />
        ))}
      </ScrollView>
    </View>
  );
};
export default Details;
