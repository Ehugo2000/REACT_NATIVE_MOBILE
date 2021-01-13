import React from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainScreen = () => {
  const { appTitle } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default MainScreen