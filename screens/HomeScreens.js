import { Text, View } from "react-native";
import React, { Component } from "react";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/native";
import Color from "../constants/Color";

export default function HomeScreens() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: Color.primary,
      }}
    >
      <Card>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Tebak Angka
        </Text>
        <Text style={{ textAlign: "center", marginVertical: 10 }}>
          Tebak Angka Diantara 1-100
        </Text>
        <CustomButton
          onPress={() => navigation.navigate("Game")}
          title="Mulai"
        />
      </Card>
    </View>
  );
}
