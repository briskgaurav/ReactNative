import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
interface Category {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
}

interface CategoryProps {
  categories: Category[];
  setActiveCategory: (Category: string) => void;
  activeCategory: string;
}

const Categories: React.FC<CategoryProps> = ({
  categories,
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <View
      className="mx-4 py-4"
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="flex-row items-center justify-center gap-4"
      >
        {categories.map((cat) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? "bg-amber-500" : "bg-zinc-300";

          return (
            <TouchableOpacity
              activeOpacity={0.5}
              className="flex items-center justify-center"
              key={cat.idCategory}
              onPress={() => setActiveCategory(cat.strCategory)}
            >
              <View className={`p-2 ${activeButtonClass}  rounded-full`}>
                <Image
                  className="w-14 h-14 rounded-full"
                  source={{ uri: cat.strCategoryThumb }}
                />
              </View>
              <Text>{cat.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
