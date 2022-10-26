import { StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/colors";

export const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
