import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";

import { suggestions } from "@/store/constant";
import { useRouter } from "expo-router";
import SuggestionCard from "./SuggestionCard";

const Suggestions = () => {
  const router = useRouter();
  const [favorite, setFavorite] = useState(false);

  return (
    <View className="mx-5">
      <View className="flex-row items-center justify-between flex-wrap">
        {suggestions.map((place, index) => (
          <SuggestionCard key={place.id} index={index} place={place} />
        ))}
      </View>
    </View>
  );
};

export default Suggestions;
