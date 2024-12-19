import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <View className="mx-4 my-10">
      <View className="bg-neutral-100 rounded-full flex-row items-center justify-between p-2">
        <TextInput style={{fontSize:wp(4)}}
          className="flex-1 px-5 text-black text-xl"
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search user.."
        />
        <TouchableOpacity
          activeOpacity={0.6}
          className="rounded-full flex items-center justify-center bg-white p-2 "
        >
          <MagnifyingGlassIcon color={"gray"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBox;
