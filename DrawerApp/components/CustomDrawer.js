import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Label from './Label';

const CustomDrawer = props => {
  const LabelArray = [
    {
      label: 'My Leads',
      path: 'Home',
    },
    {
      label: 'Team Leads',
      path: 'About',
    },
    {
      label: 'All Leads',
      path: 'Settings',
    },
  ];
  return (
    <DrawerContentScrollView style={{flex: 1}} {...props}>
      <Label navProps ={props} LabelArray={LabelArray} />
    </DrawerContentScrollView>
  );
};

//lABEL -> LABEL,CHILDREN
//CHILDREN -> LABEL + PATH
// TABS - LEADS -> MYLEAD, TEAMLEADS, ALLLEADS!

export default CustomDrawer;
