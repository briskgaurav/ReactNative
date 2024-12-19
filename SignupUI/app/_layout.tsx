import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { colorStore } from "@/theme/ColorStore";
import useAuth from "@/hooks/useAuth";

const RootLayout = () => {
  const { user } = useAuth();
  console.log("items" , user);

  return (
    <>
      {user === null ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" />
        </Stack>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="LoginScreen" />
          <Stack.Screen name="SignupScreen" />
        </Stack>
      )}

      <StatusBar backgroundColor={colorStore.bg} barStyle={"dark-content"} />
    </>
  );
};

export default RootLayout;
