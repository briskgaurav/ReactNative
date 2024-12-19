import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellAlertIcon, BellIcon } from "react-native-heroicons/outline";
import SearchBox from "@/components/SearchBox";
import axios from "axios";
import Categories from "@/components/Categories";
import Recipes from "@/components/Recipes";
import { useRouter } from "expo-router";

interface Category {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
}
interface Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: number;
}

const MainScreen = () => {
  const [Alert, setAlert] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Dessert");
  const router = useRouter();

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setRecipes(response.data.meals);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle={"dark-content"} className="bg-white" />
      <ScrollView>
        <View className="flex-row items-center justify-between mx-4 mt-2">
          <TouchableOpacity>
            <Image
              className="w-14 h-14 border border-gray rounded-full"
              source={require("../assets/images/Avtar.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAlert(!Alert)}>
            {Alert ? (
              <BellIcon size={40} color={"gray"} />
            ) : (
              <BellAlertIcon size={40} color={"gray"} />
            )}
          </TouchableOpacity>
        </View>
        <View className="mt-8 mx-4">
          <Text className="font-bold text-xl text-neutral-700">
            Hello,Gaurav
          </Text>
          <View className="mt-2">
            <Text className="font-bold text-4xl text-neutral-800">
              Make your own food,
            </Text>
            <Text className="font-bold text-4xl text-neutral-800">
              Stay at{" "}
              <Text className="font-bold text-4xl text-amber-500">home</Text>
            </Text>
          </View>
        </View>
        {/* SearchBar */}
        <SearchBox />
        {/* Categories */}
        {categories.length > 0 && (
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}

        {/* Recipes */}

        <Recipes router={router} recipes={recipes} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
