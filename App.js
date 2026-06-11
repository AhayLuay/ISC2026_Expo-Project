import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={styles.container}>
        <Text> Container 1 </Text>
      </View>

      <View style={styles.container2}> 
       <Text> Container 2 </Text>
      </View>

      <View style={styles.container3}> 
       <Text> Container 3 </Text> 
      </View>
    
      <View style={[styles.containerDefault, { backgroundColor: '#ff8fff',
                                              marginTop: 20,
                                              marginLeft: 20,}]}>
        <Text> Container 4 </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    backgroundColor: '#ff8f8f',
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth: 5, borderColor: '#9f5959',
    opacity: 0.4,
  },
  container2: {
    width: 200,
    height: 100,
    backgroundColor: '#8f8fff',
    marginBottom: 20,
    marginLeft: 20,
    padding: 10,
  },
  container3: {
    width: 200,
    height: 100,
    backgroundColor: '#93ff93',
    marginLeft: 20,
    padding: 10,
  },
  containerDefault: {
    width: 200,
    height: 100,
  }
});
