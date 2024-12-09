import {
  View,
  Text,
  ScrollView,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import DestinationCategory from "@/components/DestinationCategory";
import SortCategory from "@/components/SortCategory";
import Suggestions from "@/components/Suggestions";

const MainScreen = () => {
  const ios = Platform.OS === "ios";
  const marginTop = ios ? "mt-3" : "mt-10";

  return (
    <SafeAreaView className="flex-1 flex bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className={marginTop}>
        {/* //INFO: Header */}
        <View className="flex-row justify-between items-center py-2 mx-5 mb-10">
          <Text style={{ fontSize: wp(7) }} className="font-bold text-zinc-800">
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              style={{ width: wp(11), height: wp(11) }}
              source={require("../assets/images/avtar.png")}
            />
          </TouchableOpacity>
        </View>
        {/* //INFO: SearchBar */}

        <View className="flex-row px-4 py-3 bg-neutral-100 rounded-full items-center mx-5 mb-10">
          <MagnifyingGlassIcon size={25} color={"black"} />
          <TextInput
            className="placeholder:text-gray-800 flex-1 p-2"
            style={{ fontSize: wp(4) }}
            placeholder="Search destination"
          />
        </View>
        {/* //INFO: Destination Type */}
        <DestinationCategory />

        {/* //INFO: SortCategories */}
        <SortCategory />

        {/* //INFO: Popular Destinations */}
        <Suggestions />

      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
