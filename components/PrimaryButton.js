import { View, Text, Pressable, StyleSheet } from "react-native";

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    borderRadius: 99,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    /* shadow on android */
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
