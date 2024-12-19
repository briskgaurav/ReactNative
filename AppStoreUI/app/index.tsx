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
import Category from "@/components/Category";
import Featured from "@/components/Featured";
import ActionGames from "@/components/ActionGames";

const index = () => {
  const [activeCategory, setactiveCategory] = useState("Action");

  return (
    <LinearGradient
      colors={["rgba(58, 131, 244,0.4)", "rgba(9, 181, 211, 0.4)"]}
      className="w-full h-screen flex-1"
    >
      <SafeAreaView>
        <View className="container py-2">
          <View className="nav flex-row items-center justify-between px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size={30} />
            <BellIcon color={storeColors.text} size={30} />
          </View>

          {/* Categories */}
          <Category activeCategory={activeCategory} setActiveCategory={setactiveCategory} />

          { /* Featured Categories */}
          <Featured />

          {/* Top Action Game */}
          <ActionGames />


        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default index;
