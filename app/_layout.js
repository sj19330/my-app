import { Stack } from "expo-router";
import DetailsScreen from "./page2";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="page2" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
