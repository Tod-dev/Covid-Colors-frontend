import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity, Text } from "react-native";

import Home from "./pages/Home";
import Details from "./pages/Details";

import config from "./data/config";
import Colors from "./styles/Colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: config.appName,
            headerTintColor: Colors.special,
            headerTitleStyle: {
              fontWeight: "bold",
              justifyContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: `${route.params.name}`,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "white",
          })}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
