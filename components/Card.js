import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children, style }) {
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        ...style,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
