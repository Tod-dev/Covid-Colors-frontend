import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Button, View } from "react-native";

import regioni from "../data/regions.json";
import Region from "../components/Region";
import Colors from "../styles/Colors";
import DateTimePicker from "../components/DateTimePicker";
import DataContext from "../components/DataContext";
import MyButton from "../components/MyButton";

const convertDateToString = (date) => {
  //console.log(date);
  let today = date;
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

const Home = ({ navigation }) => {
  const [currentRegion, setCurrentRegion] = useState(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const value = useMemo(
    () => ({ currentRegion, setCurrentRegion, currentDate, setCurrentDate }),
    [currentRegion, setCurrentRegion, currentDate, setCurrentDate]
  );
  const regions = regioni.map((r) => ({ id: r.id, name: r.nome }));
  const regioniStyled = regions.map((item) => (
    <Region
      name={item.name}
      id={item.id}
      key={item.id}
      color={Colors.primary}
    />
  ));
  const [reg, setReg] = useState(regioniStyled); //array di regioni

  useEffect(() => {
    if (currentRegion) {
      const newRegionsArray = regions.map((item) => {
        if (item.id === currentRegion.id) {
          return (
            <Region
              name={item.name}
              id={item.id}
              key={item.id}
              color={Colors.primary}
            />
          );
        } else {
          return (
            <Region
              name={item.name}
              id={item.id}
              key={item.id}
              color={Colors.secondary}
            />
          );
        }
      });
      setReg(newRegionsArray);
    } else {
      setReg(regioniStyled);
    }
  }, [currentRegion]);

  const goToDetails = () => {
    navigation.navigate("Details"); // passa le props
  };

  return (
    <DataContext.Provider value={value}>
      <SafeAreaView style={style.container}>
        {!currentRegion ? (
          <>
            <Text style={style.text}>1 - Seleziona una Regione</Text>
            <View style={style.mylist}>{reg}</View>
          </>
        ) : (
          <>
            <View style={{ ...style.mylist, marginBottom: 50 }}>{reg}</View>
            <Text style={style.text}>2 - Seleziona una Data</Text>
            <DateTimePicker />
            {convertDateToString(currentDate) ==
            convertDateToString(new Date()) ? (
              <MyButton
                text1="SCOPRI LE LIMITAZIONI DI "
                text2="OGGI"
                text3=" NELLA REGIONE "
                text4={currentRegion.title}
                onPress={goToDetails}
              />
            ) : (
              <MyButton
                text1="SCOPRI LE LIMITAZIONI DEL "
                text2={convertDateToString(currentDate)}
                text3=" NELLA REGIONE "
                text4={currentRegion.title}
                onPress={goToDetails}
              />
            )}
          </>
        )}
      </SafeAreaView>
    </DataContext.Provider>
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
