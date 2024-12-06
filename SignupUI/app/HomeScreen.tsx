import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colorStore } from "@/theme/ColorStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter()
  const handleLogout = async() => {
    await router.navigate("/");

  };
  return (
    <View className={`bg-${colorStore.bg} flex-1 items-center justify-center`}>
      <SafeAreaView>
        <Text className={`text-center text-5xl font-bold text-violet-500`}>
          Home Screen
        </Text>
      </SafeAreaView>
      <TouchableOpacity onPress={handleLogout} className="bg-purple-500 px-8 py-2 rounded-xl">
        <Text className="text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
