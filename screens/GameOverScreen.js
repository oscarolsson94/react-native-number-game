import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { Title } from "../components/ui/Title";
import { Colors } from "../utils/colors";

export const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>X</Text> rounds to
        guess the number <Text style={styles.highLight}>Y</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  /* create circle image with view container */
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: "white",
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
