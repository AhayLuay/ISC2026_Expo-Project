import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function CustomInput(props) {
  return (
    <TextInput {...props}
    style={{
        borderWidth: 1,
        borderColor: "Gray",
        borderRadius: 10,
        padding: 10, 
        fontSize: 18,
        textAlign: "center"
    }}
    
    />
  )
}