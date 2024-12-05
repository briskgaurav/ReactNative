import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colorStore } from "@/theme/ColorStore";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import "../global.css";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.navigate("/SignupScreen");
  };

  //INFO: This is style section

  return (
    <SafeAreaView
      style={{ backgroundColor: colorStore.bg }}
      className={`flex-1`}
    >
      <View className="items-center justify-center flex-1 px-10">
        <Text className="text-4xl font-bold text-white ">
          Let's Get Started!
        </Text>
        <View className=" h-[50%] w-[100%]">
          <Image
            className="object-cover w-full h-full"
            source={require("../assets/images/home.png")}
          />
        </View>
        <View className="w-[100%] ">
          <Button padding='py-5' onpress={handleButtonClick} title="Sign Up" />
          <View className="flex-row items-center justify-center mt-3">
            <Text className="mr-2 font-bold text-white ">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={()=>router.navigate('/LoginScreen')}>
              <Text
                style={{ color: colorStore.button }}
                className="text-lg font-bold"
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
