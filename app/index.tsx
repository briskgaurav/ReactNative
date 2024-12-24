import { View, Text, Image, StatusBar, LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { SplashScreen, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const circle1 = useSharedValue(0);
  const circle2 = useSharedValue(0);
  useEffect(() => {
    circle1.value = 0;
    circle2.value = 0;
    setTimeout(() => (circle1.value = withSpring(circle1.value + wp(10))), 100);
    setTimeout(() => (circle2.value = withSpring(circle2.value + wp(8))), 300);
    setTimeout(() => router.navigate("/MainScreen"), 2500);
  }, []);


  return (
    <View className="flex-1 items-center justify-center bg-amber-500">
      <StatusBar barStyle={"light-content"} className="bg-amber-500" />
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
            source={require("../assets/images/bowl.png")}
          />
        </Animated.View>
      </Animated.View>
      <View className="mt-10 flex items-center justify-center">
        <Text style={{ fontSize: wp(16) }} className="font-bold text-white">
          Foody
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="font-emibold  tracking-widest text-white"
        >
          Let's cook together!
        </Text>
      </View>
    </View>
  );
};

export default index;
