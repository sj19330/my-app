import { TextInput, View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function DetailsScreen(props) {
  //                                State
  const [entry, setEntry] = useState(props.log);

//                                  functions

const handleChangeText = () => {
  // ready
}



//                                    return
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <View style={styles.textInputView}>
        <TextInput keyboardType="numeric" enterKeyHint="done"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputView: {
    width: 50,
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
});
