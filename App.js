import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
   <NavigationContainer>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    marginTop: 35,
    marginBottom: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //flexWrap: 'wrap'
  },
});
