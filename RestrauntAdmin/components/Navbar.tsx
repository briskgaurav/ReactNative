import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Bars2Icon, BellAlertIcon, BellIcon } from "react-native-heroicons/solid";
import * as Haptics from "expo-haptics";


const Navbar = () => {
    const onToggleBell = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        setAlert(!alert);
      };
    
      const [alert, setAlert] = useState(true);
  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity>
        <Bars2Icon color={"white"} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onToggleBell}>
        {alert ? (
          <BellIcon color={"white"} size={30} />
        ) : (
          <BellAlertIcon color={"lightgreen"} size={30} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
