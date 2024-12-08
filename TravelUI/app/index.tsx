import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { router, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  
  return (
    <View className="flex-1 flex justify-end relative">
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/home.jpg")}
      />

      <View className="p-5 pb-10 flex gap-8 relative">
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          className="absolute bottom-0"
        />

        <View className="flex gap-1">
          <Text
            style={{ fontSize: wp(10) }}
            className="text-white font-bold text-5xl"
          >
            Traveling made easy!
          </Text>
          <Text style={{ fontSize: wp(4) }} className="text-white text-xl mt-2">
            Experience the world's best adventure round the world with us!
          </Text>
        </View>

        <TouchableOpacity onPress={()=>router.navigate('/MainScreen')} activeOpacity={0.5} style={{width:wp(40)}} className="px-12 p-3 bg-orange-500 mx-auto rounded-full">
          <Text style={{ fontSize: wp(5) }} className="font-bold text-white text-center ">
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
