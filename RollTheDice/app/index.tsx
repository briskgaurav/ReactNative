import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <View className="flex-1 bg-red-400 items-center justify-center">
      <Text className="text-white text-4xl">index</Text>
    </View>
  );
};

export default index;
