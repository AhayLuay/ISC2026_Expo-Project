import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreens from './screens/HomeScreens';
import GameScreens from './screens/GameScreens';
import ResultScreens from './screens/ResultScreens';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreens}/>
      <Stack.Screen name="Game" component={GameScreens}/>
      <Stack.Screen name="Result" component={ResultScreens}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}