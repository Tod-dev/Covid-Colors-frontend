import React, { useState, useContext } from "react";
import { SafeAreaView, Text, StyleSheet, Button, FlatList } from "react-native";

import regioni from "../data/regions.json";
import Region from "../components/Region";
import Colors from "../styles/Colors";
import DateTimePicker from "../components/DateTimePicker";

//navigation.navigate("Details");

const convertDateToString = (date) => {
  console.log(date);
  let today = date;
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

const Home = ({ navigation }) => {
  const [currentRegion, setCurrentRegion] = useState(undefined);
  const onclickHandler = (title, id) => {
    //console.log(title, id);
    setCurrentRegion({ title, id });
  };
  const RenderItem = ({ item }) => (
    <Region name={item.name} id={item.id} onClickHandler={onclickHandler} />
  );
  const regions = regioni.map((r) => ({ id: r.id, name: r.nome }));
  return (
    <SafeAreaView style={style.container}>
      {!currentRegion ? (
        <>
          <Text style={style.text}>1 - Seleziona una Regione</Text>
          <FlatList
            contentContainerStyle={style.mylist}
            data={regions}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      ) : (
        <>
          <Text style={style.text}>2 - Seleziona una Data</Text>
          <Text>Regione: {currentRegion.title}</Text>
          <DateTimePicker />
        </>
      )}
    </SafeAreaView>
  );
};
export default Home;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
  },
  mylist: {
    margin: 5,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
