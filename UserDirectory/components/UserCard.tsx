// UserCard.tsx
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface User {
  id: number;
  name: string;
  email: string;
  address: {street:string, city:string, zipcode:string};
  company: {name:string}
}

interface UserCardProps {
  user: User;
  handleUserDetails: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, handleUserDetails }) => {
  const [fav, setFav] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onPress={() => handleUserDetails(user)}
      key={user.id}
      activeOpacity={0.6}
      style={{ width: wp(45), height: hp(30) }}
      className="bg-white p-4 rounded-3xl overflow-hidden mb-4 border flex items-center justify-center border-black/50"
    >
      <Image
        className="w-full h-full rounded-3xl absolute"
        source={require("../assets/images/user.jpg")}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        style={{
          width: wp(45),
          height: hp(30),
        }}
        className="rounded-3xl"
      />
      <TouchableOpacity
        onPress={() => setFav(!fav)}
        activeOpacity={0.6}
        className="absolute top-0 right-0 m-2 p-2 rounded-full bg-red-600/20"
      >
        <HeartIcon color={fav ? "red" : "white"} size={20} />
      </TouchableOpacity>
      <View className="w-full h-full flex justify-end absolute">
        <Text style={{fontSize:wp(5)}} className="text-white font-bold">{user.name}</Text>
        <Text style={{fontSize:wp(3)}}  className="text-white font-semibold text-sm">{user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
