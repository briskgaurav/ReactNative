import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategory } from "@/store/constant";

const SortCategory = () => {
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View className="bg-neutral-100 mb-5 mx-5 p-2 px-7 items-center justify-between flex-row rounded-full">
      {sortCategory.map((category, index) => {
        let active = activeSort === category;
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(category)}
            key={index}
            className={`px-5 py-3 shadow-black rounded-full ${
              active ? "bg-white shadow " : null
            }`}
          >
            <Text className="font-semibold">{category}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategory;
