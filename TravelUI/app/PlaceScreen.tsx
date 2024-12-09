import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  ImageComponent,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ChevronDoubleLeftIcon, MapIcon } from "react-native-heroicons/outline";
import {
  CircleStackIcon,
  ClockIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useRouter } from "expo-router";

const PlaceScreen = () => {
  const route = useRoute();
  const router = useRouter()

  type PlaceParams = {
    Name: string;
    Distance: string;
    Images: ImageSourcePropType;
    describe: string;
    Time: string;
    Temp: string;
  };

  const { Name, Distance, Images, describe, Temp, Time }: PlaceParams =
    route.params as PlaceParams;
  return (
    <SafeAreaView>
      <View className="w-full h-full flex items-center">
        <View style={{ height: hp(50), width: wp(100) }} className="relative">
          <TouchableOpacity onPress={()=>router.back()}
            activeOpacity={0.8}
            className="absolute top-5 left-5 p-2 bg-white/40 rounded-full z-10"
          >
            <ChevronDoubleLeftIcon className="" size={30} color={"white"} />
          </TouchableOpacity>
          <Image
            style={{ resizeMode: "cover" }}
            className="w-full absolute h-full"
            source={Images}
          />
        </View>

        <View
          className="bg-white absolute flex justify-between bottom-0 rounded-t-[38] p-8 first-letter:placeholder:z-20"
          style={{ height: hp(55), width: wp(100) }}
        >
          <View>
            <Text
              style={{ fontSize: wp(8) }}
              className="font-bold text-gray-800"
            >
              {Name}
            </Text>
            <Text
              style={{ fontSize: wp(4) }}
              className="mt-4 text-gray-700 font-semibold"
            >
              {describe}
            </Text>
            <View className="flex-row items-center mt-8 justify-between">
              {/* //INFO:Distance */}
              <View className="flex-row items-center gap-2">
                <ClockIcon color={"aqua"} size={35} />
                <View>
                  <Text
                    style={{ fontSize: wp(4) }}
                    className="font-bold text-gray-600 text-center"
                  >
                    {Time}
                  </Text>
                  <Text
                    style={{ fontSize: wp(3) }}
                    className="font-semibold text-gray-600"
                  >
                    Duration
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <MapPinIcon color={"red"} size={35} />
                <View>
                  <Text
                    style={{ fontSize: wp(4) }}
                    className="font-bold text-gray-600 text-center"
                  >
                    {Distance}
                  </Text>
                  <Text
                    style={{ fontSize: wp(3) }}
                    className="font-semibold text-gray-600"
                  >
                    Distance
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <SunIcon color={"orange"} size={35} />
                <View>
                  <Text
                    style={{ fontSize: wp(4) }}
                    className="font-bold text-gray-600 text-center"
                  >
                    {Temp}
                  </Text>
                  <Text
                    style={{ fontSize: wp(3) }}
                    className="font-semibold text-gray-600"
                  >
                    Weather
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity className="bg-orange-500 mb-5  py-4 rounded-full px-5">
            <Text className="text-center text-white font-bold">Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlaceScreen;
