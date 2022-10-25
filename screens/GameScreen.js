import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title } from "../components/ui/Title";
import { generateRandomBetween } from "../utils/helpers";

export const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(second);
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
