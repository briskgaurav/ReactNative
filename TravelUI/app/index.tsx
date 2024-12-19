import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View className="h-full w-full flex items-center justify-end">
        <Image
          className="h-full w-full absolute"
          source={require("../assets/images/home.jpg")}
        />
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          className="absolute"
        />

        <View className=" h-full w-full pb-20 z-20  flex justify-end gap-8 absolute">
          <View className="flex p-5 gap-1">
            <Text
              style={{ fontSize: wp(10) }}
              className="text-white font-bold text-5xl"
            >
              Traveling made easy!
            </Text>
            <Text
              style={{ fontSize: wp(4) }}
              className="text-white text-xl mt-2"
            >
              Experience the world's best adventure round the world with us!
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.navigate("/MainScreen")}
            activeOpacity={0.5}
            style={{ width: wp(50) }}
            className="px-12 p-3 shadow  bg-orange-500 mx-auto rounded-full"
          >
            <Text
              style={{ fontSize: wp(5) }}
              className="font-bold text-white text-center "
            >
              Let's Go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default index;
