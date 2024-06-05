import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function CustomButton({ l, filler }) {

  return (
    <View style={styles.buttonView}>
      <Link href={l} style={styles.buttonView}>
        <Text style={styles.buttonText}>{filler}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    display: "flex",
    width: "50%",
    height: 50,
    backgroundColor: "#0A0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
