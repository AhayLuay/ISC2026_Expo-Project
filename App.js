import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box}>
      <Text>1</Text>
      </View>
    
      <View style={styles.box}>


      </View>
        <View style={styles.box}>

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
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  box: {
    backgroundColor: 'skyblue',
    width: 30,
    height: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    borderColor: '#004b76',
    borderWidth: 5
  }
});
