// navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreens from "../screens/HomeScreens";
import GameScreens from "../screens/GameScreens";
import ResultScreens from "../screens/ResultScreens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Game" component={GameScreens} />
        <Stack.Screen name="Result" component={ResultScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
