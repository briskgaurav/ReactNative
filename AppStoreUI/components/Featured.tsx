import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { storeColors } from "@/theme";
import { featuredData } from "@/store/Data";
import { LinearGradient } from "expo-linear-gradient";

const Featured = () => {
  return (
    <View>
      <Text
        style={{ color: storeColors.text }}
        className="text-2xl px-4 mt-4 font-bold"
      >
        Featured Games
      </Text>
      <ScrollView horizontal scrollEnabled>
        {featuredData.map((card) => (
          <View className="relative p-4">
            <Image source={card.image} className="w-80 h-60 flex-row rounded-xl" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
