import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useRouter } from "expo-router";

interface RecipeDetailsParams {
  recipeId: string;
  recipeName: string;
  recipeImage: string;
}
interface MealInterface {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: string]: string | null;
}

export default function RecipeDetails() {
  const [meal, setMeal] = useState<MealInterface[]>([]);
  const router = useRouter();

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
    <SafeAreaView className="bg-zinc-100 flex-1 flex h-screen">
      <ScrollView className="flex-1" >
        <StatusBar barStyle={"dark-content"} />
        <View className="w-screen relative h-screen">
          <View className="w-full h-[40%] flex items-center">
            <Image
              style={{ resizeMode: "cover" }}
              className="w-[96%] h-full rounded-3xl"
              source={{ uri: recipeImage }}
            />
          </View>

          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-5 left-5 z-10 bg-white/80 rounded-full p-4"
          >
            <ChevronLeftIcon color={"orange"} strokeWidth={6} size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="absolute top-5 right-5 z-10 bg-white/80 rounded-full p-3">
            <HeartIcon color={"gray"} size={30} />
          </TouchableOpacity>

          {meal.map((food) => {
            // 1. Create an array to store non-null ingredients
            const ingredients = [];

            // 2. Loop through ingredient keys (from 1 to 20)
            for (let i = 1; i <= 20; i++) {
              const ingredientKey = `strIngredient${i}`;
              const ingredient = food[ingredientKey as keyof MealInterface];

              // 3. Push non-null ingredients to the array
              if (ingredient) {
                ingredients.push(ingredient);
              }
            }

            return (
              <View key={food.idMeal} className="m-4">
                <Text className="font-bold text-3xl text-neutral-800">
                  {food.strMeal}
                </Text>
                <Text className="font-medium text-lg text-orange-800">
                  {food.strArea}
                </Text>
                <Text className="font-bold text-2xl mt-4 text-neutral-800">
                  Ingredients:
                </Text>
                {ingredients.length > 0 ? (
                  // 4. Map through the ingredients array to display each
                  <View>
                    {ingredients.map((ingredient, index) => (
                      <Text key={index} className="text-lg text-neutral-700">
                        {ingredient}
                      </Text>
                    ))}
                  </View>
                ) : (
                  <Text className="text-lg text-neutral-500">
                    No ingredients available
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}
