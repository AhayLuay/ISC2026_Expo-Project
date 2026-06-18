import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomButton from '../components/CustomButton'

export default class HomeScreens extends Component {
  render() {
    return (
      <View>
        <CustomButton title="Start Game" diTekan={() => {navigation.navigate("Game")}} />
      </View>
    )
  }
}