import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

interface Place {
  id: number;
  Name: string;
  describe: string;
  Image: ImageSourcePropType;
  Temperature: String;
  rate: string;
  Days: string;
  Distance: string;
}

interface SuggestionCardProps {
  place: Place;
  index: number;
}
const SuggestionCard: React.FC<SuggestionCardProps> = ({
  place,

  index,
}) => {
  const router = useRouter();
  const handleNavigateToPlace = (place: any) => {
    router.push({
      pathname: "/PlaceScreen",
      params: {
        Name: place.Name,
        Distance: place.Distance,
        Images: place.Image,
        describe: place.describe,
        Time: place.Days,
        Temp: place.Temperature,
      },
    });
  };
  const [favorite, setFavorite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => handleNavigateToPlace(place)}
      key={index}
      activeOpacity={0.6}
      style={{ height: hp(30), width: wp(44) }}
      className="mb-5 relative"
    >
      <Image
        style={{ resizeMode: "cover" }}
        className="w-full absolute rounded-3xl h-full"
        source={place.Image}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(30),
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
        className="bottom-0 rounded-3xl"
      />
      <TouchableOpacity
        onPress={() => setFavorite(!favorite)}
        className="absolute m-4 right-0 w-10 h-10 flex items-center justify-center bg-white/50 rounded-full"
      >
        <HeartIcon size={20} color={favorite ? "red" : "white"} />
      </TouchableOpacity>
      <View className="absolute p-5 bottom-0">
        <Text className="text-white font-bold text-xl">{place.Name}</Text>
        <Text className="text-white font-semibold text-sm">
          {place.Distance}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestionCard;
