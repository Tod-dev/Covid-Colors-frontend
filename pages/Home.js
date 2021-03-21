import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NetInfo from "@react-native-community/netinfo";
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
//import ErrorMsg from "../components/ErrorMsg";
import { convertDateToString } from "../utils";
import MyAdBanner from "../components/AdBanner";
import MyLink from "../components/MyLink";

const Home = ({ navigation }) => {
  const [regioni, setRegioni] = useState([]);
  const [styledRegioni, setStyledRegioni] = useState(undefined);
  const [currentRegion, setCurrentRegion] = useState(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateLastUpdate, setDateLastUpdate] = useState(undefined);
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
        setDateLastUpdate(convertDateToString(new Date(reg[0].lastUpdate)));
      }
      setLoading(false);
    };
    //getData();
    getData();
    Alert.alert(
      "Attenzione !",
      `Note legali. Il contenuto di questa APP è da intendersi esclusivamente come visualizzazione grafica non ufficiale. L'aggiornamento e' costante ma potrebbe non essere allineato con le ultime disposizioni. Si prega di far rifermento ai provvedimenti ufficiali emanati dal Governo su: ` +
        `http://www.governo.it/it/coronavirus` +
        `. Alcuni comuni, attività o scuole potrebbero essere soggette a limitazioni più restrittive in seguito ad ordinanze locali/regionali. Si invita, in tal caso,alla consultazione delle pagine dei rispettivi organi regionali. Covid Colors e il suo team non si assumono nessuna responsabiltà a riguardo.`,
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  }, []);

  useEffect(() => {
    setCurrentRegion(undefined);
  }, [navigation]);

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) setError(true);
    });
  }, []);
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
        {/*dateLastUpdate && (
          <Text>
            Ultimo aggiornamento:{" "}
            <Text style={style.data}>{dateLastUpdate} </Text>
          </Text>
        ) */}
        <MyLink
          navigation={navigation}
          linkName={config.ContactName}
          inAppUrl={config.inAppContactPageName}
        />
        <Text style={style.intestazioni}>Seleziona una Regione</Text>
        {!currentRegion ? (
          <View style={style.mylist}>{styledRegioni}</View>
        ) : (
          <View style={{ ...style.mylist, marginBottom: hp("1%") }}>
            {styledRegioni}
          </View>
        )}

        <MyAdBanner size="banner" />

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
    width: wp("100%"),
    height: hp("100%"),
  },
  intestazioni: {
    color: Colors.primary,
    fontSize: hp("3%"),
    marginVertical: hp("1%"),
  },

  mylist: {
    marginVertical: hp("2%"),
    marginHorizontal: wp("8%"),
    maxHeight: hp("60%"),
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    fontSize: hp("5%"),
    color: Colors.special,
    marginVertical: hp("0.5%"),
  },
  data: {
    fontWeight: "bold",
  },
});
