import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Image } from "react-native";

import Home from "./pages/Home";
import Details from "./pages/Details";

import Colors from "./styles/Colors";
import myimage from "./assets/header.jpg";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTintColor: "black",
            headerBackground: () => (
              <Image
                style={{ width: "100%", height: "100%" }}
                source={myimage}
              />
            ),
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.reg.name,
            headerStyle: {
              backgroundColor: Colors.regioni[route.params.reg.color],
            },
            headerTintColor: "white",
          })}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
