import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


type UserDetail = {
  id: number;
  userName: string;
  userEmail: string;
  Street: string;
  ZipCode: string;
  City: string;
  Company: string;
};

const UserDetailScreen = () => {
  const route = useRoute();
  const router = useRouter();

  const {
    id,
    Street,
    City,
    ZipCode,
    Company,
    userName,
    userEmail,
  }: UserDetail = route.params as UserDetail;
  return (
    <SafeAreaView className="w-full h-full">
      <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />

      <View className="flex-1 flex items-center justify-between">
        <Image style={{width:wp(100), height:hp(40)}}
          source={require("../assets/images/user.jpg")}
        />
        <TouchableOpacity activeOpacity={.6}
          onPress={() => router.back()}
          className="absolute left-5 top-5 p-2 bg-blue-500/50 rounded-full "
        >
          <ArrowLeftIcon color={"white"} size={30} />
        </TouchableOpacity>
        <View  style={{width:wp(100), height:hp(60)}} className="bg-blue-300 py-10 px-5 absolute bottom-0 rounded-t-3xl">
          <View className="px-5 mb-8">
            <Text style={{fontSize:wp(10)}} className="text-white text-center font-bold">{userName}</Text>
          </View>

          <View className="bg-white/20 rounded-2xl p-8">
            <Text  style={{fontSize:wp(6)}} className="text-neutral-800 font-bold mb-4">
              Additional Details
            </Text>
            <Text style={{fontSize:wp(4.5)}} className="text-neutral-500 font-semibold">
              Email: {""} {userEmail}
            </Text>
            <Text style={{fontSize:wp(4.5)}} className="text-neutral-500 font-semibold ">
              Company Name: {""} {Company}
            </Text>
            <Text style={{fontSize:wp(4.5)}} className="text-neutral-500 font-semibold ">
              Address: {Street}, {City}, {ZipCode}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;
