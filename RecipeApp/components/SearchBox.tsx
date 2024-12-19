import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const SearchBox = () => {

  return (
    <View className="mx-4 my-5">
      <View className="bg-neutral-100 rounded-full flex-row items-center justify-between p-2">
        <TextInput className="flex-1 px-5 placeholder:text-black text-xl" placeholder="Search your recipe" />
        <TouchableOpacity activeOpacity={.6} className="rounded-full flex items-center justify-center bg-white p-2 ">
          <MagnifyingGlassIcon color={"gray"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBox;
