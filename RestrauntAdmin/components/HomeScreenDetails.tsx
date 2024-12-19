import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreenDetails = () => {
  return (
    <View className="flex my-6">
      <View className="bg-yellow-400 elevation-lg p-5 flex-row items-center justify-between mb-4 rounded-2xl">
        <Text className="text-zinc-800 w-1/2 text-xl font-bold">
          Total Orders
        </Text>
        <Text className="text-zinc-800 text-xl  font-bold">800</Text>
      </View>
      <View className="bg-red-400 elevation-lg p-5 flex-row items-center justify-between mb-4 rounded-2xl">
        <Text className="text-zinc-800 w-1/2 text-xl font-bold">
          Total Paid Payouts
        </Text>
        <Text className="text-zinc-800 text-xl  font-bold">10</Text>
      </View>
      <View className="bg-purple-400 elevation-lg p-5 flex-row items-center justify-between mb-4 rounded-2xl">
        <Text className="text-zinc-800 w-1/2 text-xl font-bold">
          Remaining Payouts
        </Text>
        <Text className="text-zinc-800 text-xl  font-bold">12</Text>
      </View>
      <View className=" flex rounded-2xl">
        <View className="flex-row items-center my-4 justify-between">
          <Text className="text-neutral-300 font-bold text-3xl ">Vouchers</Text>
          <Link href={"/VoucherTabScreen"} asChild>
          <TouchableOpacity>
            <Text className="font-semibold text-blue-300 text-md">
              View more
            </Text>
          </TouchableOpacity>
          </Link>
        </View>
        <View className="bg-cyan-400 h-[25%] rounded-2xl items-center justify-center mb-4 p-4">
          <Text className="text-zinc-800 text-2xl text-center font-bold">
            Total Active Vouchers
          </Text>
          <Text className="text-white text-2xl font-bold">45</Text>
        </View>
        <View className="bg-cyan-400 h-[25%] rounded-2xl items-center justify-center p-4">
          <Text className="text-zinc-800 text-2xl text-center font-bold">
            Total Active Discount Coupons
          </Text>
          <Text className="text-white text-2xl font-bold">210</Text>
        </View>
      </View>
      
    </View>
  );
};

export default HomeScreenDetails;
