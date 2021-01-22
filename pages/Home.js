import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Button, View } from "react-native";

import regioni from "../data/regions.json";
import Region from "../components/Region";
import Colors from "../styles/Colors";
import DateTimePicker from "../components/DateTimePicker";
import DataContext from "../components/DataContext";
import MyButton from "../components/MyButton";

import { convertDateToString } from "../utils";

const Home = ({ navigation }) => {
  const [currentRegion, setCurrentRegion] = useState(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const value = useMemo(
    () => ({ currentRegion, setCurrentRegion, currentDate, setCurrentDate }),
    [currentRegion, setCurrentRegion, currentDate, setCurrentDate]
  );
  useEffect(() => {
    setCurrentRegion(undefined);
  }, [navigation]);
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
    const stringdate = convertDateToString(currentDate);
    navigation.navigate("Details", {
      idReg: currentRegion.id,
      titleReg: currentRegion.title,
      date: currentDate.getDate(),
      stringDate: stringdate,
    }); // passa le props
  };

  return (
    <DataContext.Provider value={value}>
      <SafeAreaView style={style.container}>
        <Text style={style.intestazioni}>1 - Seleziona una Regione</Text>
        {!currentRegion ? (
          <View style={style.mylist}>{reg}</View>
        ) : (
          <View style={{ ...style.mylist, marginBottom: 50 }}>{reg}</View>
        )}
        <>
          <Text style={style.intestazioni}>2 - Seleziona una Data</Text>
          <DateTimePicker />
          {convertDateToString(currentDate) == convertDateToString(new Date())
            ? currentRegion && (
                <MyButton
                  text1="SCOPRI LE LIMITAZIONI DI "
                  text2="OGGI"
                  text3=" NELLA REGIONE "
                  text4={currentRegion.title}
                  onPress={goToDetails}
                />
              )
            : currentRegion && (
                <MyButton
                  text1="SCOPRI LE LIMITAZIONI DEL "
                  text2={convertDateToString(currentDate)}
                  text3=" NELLA REGIONE "
                  text4={currentRegion.title}
                  onPress={goToDetails}
                />
              )}
        </>
      </SafeAreaView>
    </DataContext.Provider>
  );
};
export default Home;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 17,
  },
  intestazioni: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  mylist: {
    margin: 5,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
