import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Details from "./pages/Details";

const Stack = createStackNavigator();

const DataContext = React.createContext();

export default function App() {
  const initialContextValue = { region: null, date: "" };
  return (
    <DataContext.Provider value={initialContextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </DataContext.Provider>
  );
}
