import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function CustomInput(props) {
  return (
    <TextInput {...props}
    style={{
        borderWidth: 1,
        borderColor: "Gray",
        borderRadius: 12,
        padding: 15, 
        fontSize: 18,
        textAlign: "center"
    }}
    
    />
  )
}