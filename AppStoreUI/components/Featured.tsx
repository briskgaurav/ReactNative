import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { storeColors } from "@/theme";
import { featuredData } from "@/store/Data";
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid";

const Featured = () => {

  const [Favourite, setFavourite] = useState(false);
  return (
    <View>
      <Text
        style={{ color: storeColors.text }}
        className="text-2xl px-4 mt-4 font-bold"
      >
        Featured Games
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEnabled>
        {featuredData.map((card) => (
          <View className="relative  p-4">
            <View className="w-80 h-60">
              <Image
                source={card.image}
                className="w-full h-full flex-row rounded-2xl"
              />

              <View className="absolute flex-row w-full h-full bg-black/40 rounded-2xl "></View>
              <View className="absolute flex w-full z-10 h-full justify-end p-5">
                  <TouchableOpacity onPress={()=>{setFavourite(!Favourite)}} className="w-12 h-12 bg-zinc-200/30 flex items-center justify-center absolute top-5 right-5 rounded-full">

                    
                    <HeartIcon size="24" color={Favourite? storeColors.heart : "white"} />
                  </TouchableOpacity>
                <Text className="font-bold flex text-2xl text-zinc-200 ">
                  {card.title}
                </Text>

                <View className="flex-row gap-2 items-center">
                  <ArrowDownTrayIcon color="lightgray" />
                  <Text className="text-gray-300 text-sm font-semibold">
                    {card.downloads} Downloads
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
