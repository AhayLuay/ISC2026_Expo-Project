import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card"; // Jangan lupa import Card
import Color from "../constants/Color";

export default function GameScreens() {
  
  const { attempts, setAttempts } = useState(0);
  /*
  const guess;


  const handleGuess = () => {
    if (gameOver) {
      Alert.alert("Permainan Selesai", "Tekan tombol Reset untuk memulai ulang");
      return;
    }

    const guessNumber = parseInt(guess);
    
    // Validasi input
    if (isNaN(guessNumber) || guess.trim() === "") {
      setMessage(" Silakan masukkan angka yang valid!");
      setGuess("");
      return;
    } 

    if (guessNumber < 1 || guessNumber > 100) {
      setMessage("⚠️ Angka harus antara 1 - 100!");
      setGuess("");
      return;
    }

    // Logika tebakan
    setAttempts(attempts + 1);

    if (guessNumber === targetNumber) {
      setMessage(`🎉 SELAMAT! Anda menebak dengan benar! Angkanya adalah ${targetNumber}`);
      setGameOver(true);
      Alert.alert(
        "Selamat! 🎉",
        `Anda berhasil menebak angka ${targetNumber} dalam ${attempts + 1} percobaan!`,
        [{ text: "OK" }]
      );
    } else if (guessNumber < targetNumber) {
      setMessage(`📈 Terlalu kecil! Coba angka yang lebih besar dari ${guessNumber}`);
    } else {
      setMessage(`📉 Terlalu besar! Coba angka yang lebih kecil dari ${guessNumber}`);
    }

    setGuess("");
  };*/

  return (
    <View>
      <Card>
        <Text>Tebak angka 1 - 100</Text>
        <CustomButton title="Tebak" />
        <Text>Percobaan:{attempts}</Text>
        <Text></Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: Color.background,
  },
  tebakText: {
    fontSize: 18,
    marginVertical: 15,
    textAlign: "center",
  },
});
