import { View, Text, Image, Pressable, useColorScheme, Switch } from "react-native";
import React, { useEffect, useState } from "react";
import one from "../assets/images/One.png";
import two from "../assets/images/Two.png";
import three from "../assets/images/Three.png";
import four from "../assets/images/Four.png";
import five from "../assets/images/Five.png";
import six from "../assets/images/Six.png";
import * as Haptics from "expo-haptics";

const index = () => {
  const [dice, setDice] = useState(one);
  const diceArray = [one, two, three, four, five, six];

  // DarkMode 
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme); 

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Random dice roll
  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6);  // Corrected index range (0 to 5)
    setDice(diceArray[randomNum]);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <View 
      className={`flex-1 items-center justify-center ${theme === 'dark' ? 'bg-zinc-900' : 'bg-sky-300'}`}
    >
      <Text 
        className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-purple-900'} mb-10 font-bold`}
      >
        Roll The Dice🎲
      </Text>

      <View>
        <Image source={dice} />
      </View>

      <Pressable onPress={rollDice}>
        <Text className={`text-2xl px-8 py-2 rounded-xl mt-5 ${theme === 'dark' ? 'bg-violet-600 text-white' : 'bg-violet-300 text-purple-900'} font-bold`}>
          Roll Now!
        </Text>
      </Pressable>

      <View className="w-full h-20 flex items-center justify-center">
        <Switch 
          value={theme === 'dark'} 
          onValueChange={toggleTheme} 
        />
        <Text className={`text-sm ml-3  ${theme === 'dark' ? ' text-white' : ' text-purple-900'}`}>
          {theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Text>
      </View>
    </View>
  );
};

export default index;
