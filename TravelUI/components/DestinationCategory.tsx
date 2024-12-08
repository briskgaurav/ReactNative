import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DestinationType } from "@/store/constant";

const DestinationCategory = () => {
  return (
    <View className="">
      <View className="mx-5 flex-row items-center justify-between ">
        <Text style={{ fontSize: wp(4) }} className="font-bold text-gray-600">
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
      <ScrollView className="space-x-4" horizontal showsHorizontalScrollIndicator={false}>
        {DestinationType.map((type) => (
          <TouchableOpacity>
            <Text>{type.WeatheName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DestinationCategory;
