import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorStore } from "@/theme/ColorStore";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase.config";

const SignupScreen = () => {
  //INFO: FIREBASE AUNTENTICATION
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleButtonClick = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.navigate("/HomeScreen");
      } catch (err:any) {
        console.log(err.message);
      }
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: colorStore.bg }} className="flex-1">
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ backgroundColor: colorStore.button }}
        className="w-[12%] p-4 m-4 mt-8 rounded-tr-3xl rounded-bl-3xl"
      >
        <ArrowLeftIcon color={"black"} size={18} />
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
          <Text className="ml-4 text-lg font-semibold text-gray-600 ">
            Full Name
          </Text>
          <TextInput
            className="w-full px-5 py-4 bg-gray-100 rounded-xl"
            placeholder="john doe"
          />
        </View>
        <View className="w-full mb-4">
          <Text className="ml-4 text-lg font-semibold text-gray-600 ">
            Email ID
          </Text>
          <TextInput
            className="w-full px-5 py-4 bg-gray-100 rounded-xl"
            placeholder="Write your name.."
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View className="w-full mb-4">
          <Text className="ml-4 text-lg font-semibold text-gray-600 ">
            Password
          </Text>
          <TextInput
            secureTextEntry
            className="w-full  text-lg px-5 py-4 bg-gray-100 rounded-xl"
            placeholder="Write your name.."
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <Button padding="py-4" onpress={handleButtonClick} title="Sign Up" />
        <Text className="m-4 text-xl font-bold">OR</Text>
        <View>
          <View className="flex-row items-center mt-2">
            <View className="flex items-center justify-center mx-5 rounded-xl w-14 h-14 bg-zinc-200">
              <Image
                source={require("../assets/images/google.png")}
                className="object-cover w-full h-full"
              />
            </View>
            <View className="flex items-center justify-center mx-5 rounded-xl w-14 h-14 bg-zinc-200">
              <Image
                source={require("../assets/images/apple.png")}
                className="object-cover w-full h-full"
              />
            </View>
            <View className="flex items-center justify-center mx-5 rounded-xl w-14 h-14 bg-zinc-200">
              <Image
                source={require("../assets/images/facebook.png")}
                className="object-cover w-full h-full"
              />
            </View>
          </View>
          <View className="flex-row items-center justify-center mt-6">
            <Text className="mr-2 text-md font-semibold text-black ">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.navigate("/LoginScreen")}>
              <Text
                style={{ color: colorStore.button }}
                className="text-md font-bold"
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

export default SignupScreen;
