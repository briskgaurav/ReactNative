import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

interface RecipeDetailsParams {
  recipeId: string;
  recipeName: string;
  recipeImage: string;
}

export default function RecipeDetails() {
  const [meal, setMeal] = useState();

  useEffect(() => {
    getRecipeMealDetails(recipeId);
  }, []);

  const getRecipeMealDetails = async (id: string) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response && response.data) {
        setMeal(response.data.meals);
      }
    } catch (error) {
      console.log("errorMsg:", error);
    }
  };

  const { recipeId, recipeName, recipeImage } = useRoute()
    .params as RecipeDetailsParams;

  return (
    <SafeAreaView className="bg-zinc-100">
      <StatusBar barStyle={"light-content"} />
      <View className="w-screen relative h-screen">
        <View className="w-full absolute h-1/2 flex items-center">
          <Image
            style={{ resizeMode: "cover" }}
            className="w-[96%] h-full rounded-3xl"
            source={{ uri: recipeImage }}
          />
        </View>
        <ChevronLeftIcon
          className="absolute top-0 right-20 z-10
             bg-red-700"
          color={"red"}
          size={30}
        />
      </View>
    </SafeAreaView>
  );
}
