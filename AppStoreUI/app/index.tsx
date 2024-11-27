import { View, Text, ScrollView } from "react-native";
import React from "react";

const index = () => {
  return (
    <ScrollView>
      
      <View className="w-full h-screen bg-blue-200 flex items-center justify-center">
        <Text>This is a scroll view example</Text>
      </View>
    </ScrollView>
  );
};

export default index;
