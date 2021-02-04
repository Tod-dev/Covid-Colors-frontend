import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";

//import regioni from "../data/regions.json";
import { getRegions } from "../services/regions";
import Region from "../components/Region";
import Colors from "../styles/Colors";
//import DateTimePicker from "../components/DateTimePicker";
import DataContext from "../components/DataContext";
import MyButton from "../components/MyButton";
import Error from "../components/Error";
import Loading from "../components/Loading";
import config from "../data/config";
//import { convertDateToString } from "../utils";

const Home = ({ navigation }) => {
  const [regioni, setRegioni] = useState([]);
  const [styledRegioni, setStyledRegioni] = useState(undefined);
  const [currentRegion, setCurrentRegion] = useState(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const value = useMemo(
    () => ({ currentRegion, setCurrentRegion, currentDate, setCurrentDate }),
    [currentRegion, setCurrentRegion, currentDate, setCurrentDate]
  );

  useEffect(() => {
    const getData = async () => {
      //console.log("sono dentro");
      let res = await getRegions();
      //console.log("ok");
      if (!res.ok) {
        setError(true);
      } else {
        const reg = await res.json();
        //console.log(reg);
        setRegioni(reg);
        const styledReg = reg.map((item) => {
          return <Region reg={item} key={item._id} color={Colors.primary} />;
        });
        setStyledRegioni(styledReg);
      }
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    setCurrentRegion(undefined);
  }, [navigation]);

  useEffect(() => {
    if (currentRegion) {
      //console.log(currentRegion);
      const newRegionsArray = regioni.map((item) => {
        if (item._id === currentRegion) {
          return <Region reg={item} key={item._id} color={Colors.primary} />;
        } else {
          return <Region reg={item} key={item._id} color={Colors.secondary} />;
        }
      });
      setStyledRegioni(newRegionsArray);
    } else {
      const reg = regioni.map((item) => {
        return <Region reg={item} key={item._id} color={Colors.primary} />;
      });
      setStyledRegioni(reg);
    }
  }, [currentRegion]);

  const goToDetails = () => {
    //const stringdate = convertDateToString(currentDate);
    const regione = regioni.filter((r) => r._id === currentRegion);
    //console.log(regione[0]);
    navigation.navigate("Details", {
      reg: regione[0],
      //titleReg: currentRegion.name,
      //date: currentDate.getDate(),
      //stringDate: stringdate,
    }); // passa le props
  };

  if (loading) {
    return <Loading color={Colors.primary} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <DataContext.Provider value={value}>
      <SafeAreaView style={style.container}>
        <Text style={style.title}> {config.appName}</Text>
        <Text style={style.intestazioni}>Seleziona una Regione</Text>
        {!currentRegion ? (
          <View style={style.mylist}>{styledRegioni}</View>
        ) : (
          <View style={{ ...style.mylist, marginBottom: 50 }}>
            {styledRegioni}
          </View>
        )}
        {currentRegion && (
          <MyButton text="Vai alle informazioni" onPress={goToDetails} />
        )}
        {/*
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
        */}
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
  intestazioni: {
    color: Colors.primary,
    fontSize: 20,
    marginVertical: 8,
  },

  mylist: {
    margin: 5,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: Colors.special,
    marginVertical: 10,
  },
});
