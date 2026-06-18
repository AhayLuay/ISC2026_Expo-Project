import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>

      <View style={styles.box}>

        <Text style={styles.countText}>Count: {count}</Text>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Add 1</Text>
        </Pressable>
        
      </View>
      
    </View>
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
  box: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 120,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    borderColor: '#004b76',
    borderWidth: 5,
    //alignSelf: 'flex-end' //untuk mengatur posisi box secara individual
  },
  textInput: {
    backgroundColor: 'white',
    width: 250,
    height: 40,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  countText: {
    fontSize: 18,
  }
});
