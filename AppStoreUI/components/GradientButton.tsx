import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { storeColors } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
const GradientButton = (props:any) => {
  return (
      <TouchableOpacity className="bg-blue-400 overflow-hidden mt-4 p-2 px-4 rounded-full mr-2">
        <Text style={{ color: storeColors.text }}>{props.value}</Text>
      </TouchableOpacity>
  );
};

export default GradientButton;
