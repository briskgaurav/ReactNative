import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { colorTheme } from "@/theme/ColorTheme";

const Login = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={colorTheme.bg} />
      <View
        style={{ backgroundColor: colorTheme.bg }}
        className={`flex-1 flex items-center justify-center px-5 py-10`}
      >
        <View className="flex p-10 items-center justify-center">
          <Text style={{ fontSize: 50 }} className="text-white font-bold">
            Welcome!
          </Text>
          <Text className="text-xl text-cyan-400 font-semibold">
            Let's Manage Food Orders
          </Text>
        </View>

        <View className=" p-4 py-5 rounded-2xl flex items-center justify-center ">
          <View className="flex-row items-center mb-4">
            <TextInput
              style={{ color: "white" }}
              className="border text-xl rounded-3xl placeholder:text-white border-white p-4 flex-1"
              placeholder="Email Id"
            />
          </View>
          <View className="flex-row items-center mb-4">
            <TextInput
              style={{ color: "white" }}
              secureTextEntry
              className="border text-xl rounded-3xl placeholder:text-white border-white p-4 flex-1"
              placeholder="Password"
            />
          </View>
          <View className="my-2 flex-row items-center justify-center">
            <TouchableOpacity className="bg-cyan-400 flex-1 elevation-lg px-10 py-4 rounded-full ">
              <Text className="text-zinc-800 text-xl text-center font-bold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
