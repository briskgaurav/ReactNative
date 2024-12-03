import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { storeColors } from "@/theme";
import GameCard from "./GameCard";
import { games } from "@/store/Data";

const ActionGames = () => {
  const [SelectedGame, setSelectedGame] = useState(null);
  return (
    <View className=" px-4 ">
      <View className="flex-row items-center justify-between">
        <Text
          style={{ color: storeColors.text }}
          className="text-2xl font-bold"
        >
          Top Action Games
        </Text>
        <TouchableOpacity>
          <Text className="text-blue-600 font-semibold text-md">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {games.map((game, index) => {
          let bg = game.id==SelectedGame? 'rgba(255,255,255,0.4)': 'transparent';

          return <GameCard setbg={setSelectedGame} bg={bg} key={index} game={game} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ActionGames;
