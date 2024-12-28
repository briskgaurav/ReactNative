import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Label = ({ LabelArray, navProps }) => {
  const [hide, setHide] = useState(false);
  console.log(navProps.navigation)

  return (
    <View>
      <TouchableOpacity onPress={() => setHide(!hide)}>
        <Text style={{ fontSize: 20 }}>Leads</Text>
      </TouchableOpacity>
      {hide && (
        <View>
          {LabelArray.map((data, index) => (
            <TouchableOpacity key={index} style={{ marginTop: 5 }} onPress={()=>navProps.navigation.navigate(data.path)}>
              <Text>{data.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};


export default Label;
