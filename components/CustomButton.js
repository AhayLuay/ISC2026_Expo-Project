import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomButton ({ diTekan, title}) {
    return (
        <TouchableOpacity onPress={diTekan} 
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}
        >
            <Text> 
                tes
            </Text>
        </TouchableOpacity>
    )
}