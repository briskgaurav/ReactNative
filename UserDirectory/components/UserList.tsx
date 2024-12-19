import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import UserCard from "./UserCard";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface User {
  id: number;
  name: string;
  email: string;
  address: { street: string; city: string; zipcode: string };
  company: { name: string };
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const router = useRouter();

  const handleUserDetails = (user: User) => {
    router.push({
      pathname: "/UserDetailScreen",
      params: {
        id: user.id,
        userName: user.name,
        userEmail: user.email,
        Street: user.address.street,
        ZipCode: user.address.zipcode,
        City: user.address.city,
        Company: user.company.name,
      },
    });
  };

  return (
    <View className="mx-4 flex-1">
      <Text style={{ fontSize: wp(8) }} className="text-neutral-800 font-bold text-3xl">
        User List
      </Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserCard
            key={item.id}
            user={item}
            handleUserDetails={handleUserDetails}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2} // Two columns for a grid-like layout
        contentContainerStyle={{
          paddingVertical: 10,
          justifyContent: "space-between", // Ensures space between columns
          gap: wp(4), // Adds horizontal gap between cards
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }} // Adds space between cards horizontally
      />
    </View>
  );
};

export default UserList;
