import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ textAlign: "center", color: "#ffffff" }}>{title}</Text>
    </TouchableOpacity>
  );
}
