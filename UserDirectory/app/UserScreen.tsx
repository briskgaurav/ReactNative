import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellAlertIcon, BellIcon } from "react-native-heroicons/outline";
import SearchBox from "@/components/SearchBox";
import UserList from "@/components/UserList";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


interface User {
  id: number;
  name: string;
  email: string;
  address: {street:string, city:string, zipcode:string};
  company: {name:string}

}

const UserScreen = () => {
  const [Alert, setAlert] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle={"dark-content"} className="bg-white" />

      <View className="flex-row items-center justify-between mx-4 mt-2">
        <TouchableOpacity>
          <Image style={{width:wp(12), height:wp(12)}}
            className=" border border-gray rounded-full"
            source={require("../assets/images/Avtar.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAlert(!Alert)}>
          {Alert ? (
            <BellIcon size={40} color={"gray"} />
          ) : (
            <BellAlertIcon size={40} color={"gray"} />
          )}
        </TouchableOpacity>
      </View>

      {/* SearchBox */}
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* UserList */}
      <UserList users={filteredUsers} /> 
    </SafeAreaView>
  );
};

export default UserScreen;
