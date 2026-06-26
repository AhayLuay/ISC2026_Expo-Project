import { Text, View, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card"; // Jangan lupa import Card
import Color from "../constants/Color";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { generateNumber } from "../utils/generateNumber";

export default function GameScreens() {
  const [ attempts, setAttempts ] = useState(0);
  const [ guess, setGuess] = useState("");
  const [ target, setTarget] = useState(0);
  const [ message, setMessage] = useState("")

  const navigation = useNavigation()

  useEffect(() => {
    setTarget(generateNumber())
  }, []);

  const checkAnswer = () => {
    const number = parseInt(guess);

    if (!number) {
      Alert.alert("error", "Masukkan Angka");
      return;
    }
    setAttempts((prev) => prev + 1)
      
    if(number > target) {
      setMessage ("Tebakan Terlalu Tinggi");
      } else if (number < target) {
        setMessage("Tebakan Terlalu Rendah")
      }else {
        navigation.navigate("Result", {attempt: attempts + 1})
      }
        
      setGuess("") //setelah pindah halaman akan merestart jawaban
    };

  return (
    <View style={styles.container}>
      <Card>
        <Ionicons
        name="help-circle"
        size={50}
        color={Color.primary}
        style={{ alignSelf: "center"}}
        />
        <Text style={styles.tebakText}>Tebak angka 1 - 100</Text>
          <CustomInput
            placeholder="Masukkan tebakan"
            keyboardType="numeric" 
            value={guess} 
            onChangeText={setGuess}
            />
          <CustomButton title="Tebak" onPress={checkAnswer} />
          <Text style={styles.percobaanText}> percobaan: {attempts} </Text>
          <Text style={styles.percobaanText, {fontWeight: "bold", alignSelf:"center" }}>
            Pesan: {message}
          </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: Color.primary,
  },
  tebakText: {
    fontSize: 18,
    marginVertical: 15,
    textAlign: "center",
  },
  percobaanText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  }
});
