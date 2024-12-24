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
import YoutubePlayer from "react-native-youtube-iframe";

interface RecipeDetailsParams {
  recipeId: string;
  recipeName: string;
  recipeImage: string;
}

interface MealInterface {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strYoutube: string | null; // strYoutube can be null
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: string]: string | null;
}

export default function RecipeDetails() {
  const [meal, setMeal] = useState<MealInterface[]>([]);
  const router = useRouter();
  const { recipeId, recipeName, recipeImage } = useRoute()
    .params as RecipeDetailsParams;

  useEffect(() => {
    getRecipeMealDetails(recipeId);
  }, [recipeId]);

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

  // Updated: Make sure it returns a string or undefined (handle null case).
  function getYouTubeVideoId(url: string | null): string | undefined {
    if (!url) return undefined; // Return undefined if URL is null or empty
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : undefined; // Return undefined if match is not found
  }

  const [favourites,setFavourites] =useState(false);

  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="w-screen relative">
          <View style={{ height: 400 }} className="w-full flex items-center">
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
          <TouchableOpacity onPress={()=>setFavourites(!favourites)} className="absolute top-5 right-5 z-10 bg-white/80 rounded-full p-3">
            <HeartIcon color={favourites?"red" : "gray"} size={30} />
          </TouchableOpacity>

          {meal.map((food) => {
            const ingredients = [];

            // Collect ingredients
            for (let i = 1; i <= 20; i++) {
              const ingredientKey = `strIngredient${i}`;
              const ingredient = food[ingredientKey as keyof MealInterface];
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

                {/* Ingredients */}
                {ingredients.length > 0 && (
                  <View className="my-2">
                    {ingredients.map((ingredient, index) => (
                      <View key={index} className="flex-row items-center gap-2">
                        <View className="w-4 h-2 rounded-full bg-amber-500"></View>
                        <Text className="text-lg text-neutral-700">
                          {ingredient}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}

                <View>
                  <Text className="font-bold text-2xl mt-4 text-neutral-800">
                    Recipe Instructions
                  </Text>
                  <Text className="mt-2">{food.strInstructions}</Text>
                </View>

                <Text className="text-2xl mt-8 font-bold">Recipe Video</Text>

                {food.strYoutube && (
                  <View className="mt-2">
                    <YoutubePlayer
                      height={300}
                      videoId={getYouTubeVideoId(food.strYoutube)}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
