import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DestinationType } from "@/store/constant";

const DestinationCategory = () => {
  return (
    <View className="py-5">
      <View className="mx-5 flex-row items-center justify-between ">
        <Text style={{ fontSize: wp(5) }} className="font-bold text-gray-700">
          Categories
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text
            style={{ fontSize: wp(4), color: "#FF7901" }}
            className="font-bold"
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mx-5"
      >
        {DestinationType.map((type, index) => {
          return (
            <TouchableOpacity key={index} className="py-5 pr-4">
              <Image
                source={type.Image}
                style={{ width: wp(20), height: wp(19) , resizeMode:"cover"}}
                className="rounded-3xl "
              />
              <Text className="text-neutral-700 font-bold text-center">{type.WeatheName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DestinationCategory;
