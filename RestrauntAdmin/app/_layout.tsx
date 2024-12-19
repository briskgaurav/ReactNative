import { Stack } from "expo-router";
import "../global.css";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="Welcome" />
        <Stack.Screen name="HomeScreen" />
      </Stack>
    </>
  );
}
