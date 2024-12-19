import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Router } from "expo-router";

interface Recipes {
  strMeal: string;
  strMealThumb: string;
  idMeal: number;
}
interface RecipesProps {
  recipes: Recipes[];
  router: Router;
}

const Recipes: React.FC<RecipesProps> = ({ router, recipes }) => {
  return (
    <View className="m-4 ">
      <Text className="text-3xl text-neutral-700 font-bold mb-4">Recipes</Text>
      <View className="flex-row items-center justify-between flex-wrap gap-4">
        {recipes.map((recipe) => {
          return (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/RecipeDetails",
                  params: {
                    recipeId: recipe.idMeal.toString(),
                    recipeName: recipe.strMeal,
                    recipeImage: recipe.strMealThumb,
                  },
                })
              }
              activeOpacity={0.5}
              key={recipe.idMeal}
              style={{ height: 250 }}
              className=" w-[48%]"
            >
              <Image
                style={{ borderRadius: 20 }}
                className="w-full h-full"
                source={{ uri: recipe.strMealThumb }}
              />
              <View className="absolute bottom-0 left-0 px-4 w-full  bg-white/80 py-2">
                <Text className=" text-black font-bold text-center shadow-black text-md">
                  {recipe.strMeal}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Recipes;
