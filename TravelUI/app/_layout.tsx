import { Stack } from "expo-router";
import "../global.css"


export default function RootLayout() {
  return (

   <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="index" />
     <Stack.Screen name="MainScreen" />
    <Stack.Screen name="PlaceScreen" />
   </Stack>
  );
}