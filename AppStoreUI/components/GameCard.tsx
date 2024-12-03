import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { games } from "@/store/Data";
import { ArrowDownTrayIcon } from "react-native-heroicons/solid";
import { storeColors } from "@/theme";
import GradientButton from "./GradientButton";

const GameCard = (props: any) => {
  return (
    <TouchableOpacity onPress={()=>props.setbg(props.game.id)} style={{backgroundColor:props.bg}} className="mt-2 rounded-3xl">
      <View className="w-screen py-2 flex-row justify-between">
        <View className="px-2 flex-row items-center">
          <Image className="w-24 h-24 rounded-xl" source={props.game.image} />
          <View className="px-2 ml-2  gap-2">
            <Text className="text-lg text-gray-700 font-semibold">
              {props.game.title}
            </Text>
            <View className="flex-row gap-2  items-center">
              <Text className="text-gray-700 text-sm font-medium">
                ⭐{props.game.stars} Stars
              </Text>
              <View className="flex-row items-center  gap-1">
                <ArrowDownTrayIcon size="15" className="text-blue-500" />

                <Text className="text-gray-700 text-sm font-medium">
                  {props.game.downloads}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex justify-center">
          <GradientButton styling="px-8 py-3" value="Play" />
        </View>

        <View className="px-2"></View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
