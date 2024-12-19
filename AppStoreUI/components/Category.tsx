import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { storeColors } from "@/theme";
import { categories } from "@/store/Categories";
import GradientButton from "./GradientButton";

interface CategoryProps {
  setActiveCategory: (category: string) => void;
  activeCategory: string;
}
const Category: React.FC<CategoryProps> = ({
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <View className="mt-4 px-4">
      <Text style={{ color: storeColors.text }} className="text-4xl font-bold">
        Browse Game
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category,index) => {
          if (activeCategory == category) {
            return <GradientButton key={index} value={category} />;
          } else {
            return (
              <TouchableOpacity key={index}
                onPress={() => setActiveCategory(category)}
                className="bg-sky-200 overflow-hidden mt-4 p-2 px-4 rounded-full mr-2"
              >
                <Text style={{ color: storeColors.text }}>{category}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
