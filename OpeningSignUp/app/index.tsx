import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import "../global.css";


const index = () => {
  return (
    <View className="flex-1 bg-red-500">
      <SafeAreaView>
        <Text className="font-bold">index</Text>
      </SafeAreaView>
    </View>
  );
};

export default index;
