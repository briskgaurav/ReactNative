import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowDownTrayIcon,
  Bars3CenterLeftIcon,
  BellIcon,
} from "react-native-heroicons/solid";
import { storeColors } from "@/theme";
import { categories } from "@/store/Categories";
import GradientButton from "@/components/GradientButton";

const index = () => {
  const [activeCategory, setactiveCategory] = useState("Action");

  return (
    <LinearGradient
      colors={["rgba(58, 131, 244,0.4)", "rgba(9, 181, 211, 0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <View className="nav flex-row items-center justify-between px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size={30} />
            <BellIcon color={storeColors.text} size={30} />
          </View>
          {/* Categories */}

          <View className="mt-4 px-4">
            <Text
              style={{ color: storeColors.text }}
              className="text-4xl font-bold"
            >
              Browse Game
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => {
                if (activeCategory == category) {
                  return (
                   <GradientButton value={category} />
                  )
                } else {
                  return (
                    <TouchableOpacity
                      onPress={() => setactiveCategory(category)}
                      className="bg-sky-200 overflow-hidden mt-4 p-2 px-4 rounded-full mr-2"
                    >
                      <Text style={{ color: storeColors.text }}>
                        {category}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default index;
