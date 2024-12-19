import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { colorTheme } from "@/theme/ColorTheme";
import HomeScreenDetails from "@/components/HomeScreenDetails";
import Navbar from "@/components/Navbar";

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={colorTheme.bg} />
      <SafeAreaView
        style={{ backgroundColor: colorTheme.bg }}
        className="flex-1 "
      >
        <View className={`flex-1 px-5`}>
          {/* Navbar */}
          <Navbar />
          {/* Content */}
          <View className="my-6">
            <Text className="text-white text-4xl font-bold ">
              Hello, Harry!
            </Text>
            <HomeScreenDetails />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
