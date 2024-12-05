import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorStore } from "@/theme/ColorStore";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

const SignupScreen = () => {
  const router = useRouter();
  const handleButtonClick =()=>{
    router.navigate('/LoginScreen')
  }
  return (
    <SafeAreaView style={{ backgroundColor: colorStore.bg }} className="flex-1">
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ backgroundColor: colorStore.button }}
        className="p-4 rounded-tr-3xl rounded-bl-3xl w-[15%] mt-8 m-4"
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <View className="flex w-[100%] items-center justify-center h-[25%]">
        <Image
          className="object-cover w-[50%] h-[100%]"
          source={require("../assets/images/SignUp.png")}
        />
      </View>
      <View
        style={{ borderTopStartRadius: 50, borderTopRightRadius: 50 }}
        className="w-[100%] px-8 py-10 h-screen flex items-center bg-white"
      >
        <View className="w-full mb-4">
          <Text className="text-lg font-semibold text-gray-700 ">
            Full Name
          </Text>
          <TextInput
            className="w-full px-5 py-3 bg-gray-100 rounded-xl"
            placeholder="Write your name.."
          />
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-semibold text-gray-700 ">Email ID</Text>
          <TextInput
            className="w-full px-5 py-3 bg-gray-100 rounded-xl"
            placeholder="Write your name.."
          />
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-semibold text-gray-700 ">Password</Text>
          <TextInput
            className="w-full px-5 py-3 bg-gray-100 rounded-xl"
            placeholder="Write your name.."
          />
        </View>
        <Button padding='py-4' onpress={handleButtonClick} title='Login' />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
