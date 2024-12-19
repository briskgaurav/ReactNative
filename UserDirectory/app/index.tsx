import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const circle1 = useSharedValue(0);
  const circle2 = useSharedValue(0);
  useEffect(() => {
    circle1.value = 0;
    circle2.value = 0;
    setTimeout(() => (circle1.value = withSpring(circle1.value + wp(8))), 100);
    setTimeout(() => (circle2.value = withSpring(circle2.value + wp(5))), 300);
    setTimeout(() => router.navigate("/UserScreen"), 2500);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-sky-300">
      <StatusBar barStyle={"light-content"} className="bg-sky-300" />
      <Animated.View
        style={{ padding: circle1 }}
        className=" bg-white/20 rounded-full"
      >
        <Animated.View
          style={{ padding: circle2 }}
          className=" bg-white/20 rounded-full"
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/images/note.png")}
          />
        </Animated.View>
      </Animated.View>
      <View className="mt-10 flex items-center justify-center">
        <Text style={{ fontSize: wp(12) }} className="font-bold text-yellow-400">
          Directory
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="font-emibold font-bold  tracking-widest text-white"
        >
          Check User Records!
        </Text>
      </View>
    </View>
  );
};

export default index;
