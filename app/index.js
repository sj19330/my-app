import { Link } from "expo-router";
import { Text, View, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function Index({ navigation }) {
  const [specialVar, setSpecialVar] = useState("specialVar");

  function handlePress() {
    alert("button pressed");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the homescreen</Text>
      <Button onPress={handlePress} title="Next page"></Button>
      <Text>{specialVar}</Text>
      <Link href="page2">link</Link>
    </View>
  );
}
