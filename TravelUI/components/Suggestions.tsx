import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { suggestions } from "@/store/constant";
console.log(suggestions);
import {} from "react-native-heroicons/solid";

import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";

const Suggestions = () => {
  const router = useRouter();

  return (
    <View className="mx-5">
      <View className=" flex-row items-center justify-between flex-wrap">
        {suggestions.map((place, index) => (
          <TouchableOpacity onPress={()=>router.navigate('/Place')}
            key={index}
            activeOpacity={0.6}
            style={{ height: hp(30), width: wp(44) }}
            className=" mb-5 relative"
          >
            <Image
              style={{ resizeMode: "cover" }}
              className="w-full absolute rounded-3xl h-full"
              source={place.Image}
            />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={{
                width: wp(44),
                height: hp(30),
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              className="bottom-0 rounded-3xl"
            />
            <TouchableOpacity className="absolute m-4 right-0 w-10 h-10 flex items-center justify-center bg-white/50 rounded-full">
              <HeartIcon size={20} color={"white"} />
            </TouchableOpacity>
            <View className="absolute p-5 bottom-0">
              <Text className="text-white font-bold text-xl">{place.Name}</Text>
              <Text className="text-white font-semibold text-sm">
                {place.Distance}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Suggestions;
