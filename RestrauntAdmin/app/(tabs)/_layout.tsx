import React from "react";
import { Tabs } from "expo-router";
import {
  ClipboardIcon,
  GiftIcon,
  HomeModernIcon,
  ReceiptPercentIcon,
} from "react-native-heroicons/solid";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "#FC8181",
        tabBarStyle: {
          backgroundColor: "#36363E",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 15,
          borderTopWidth: 0,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeModernIcon size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ReportTabScreen"
        options={{
          title: "Reports",
          tabBarIcon: ({ color }) => <ClipboardIcon size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="VoucherTabScreen"
        options={{
          title: "Vouchers",
          tabBarIcon: ({ color }) => <GiftIcon size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="DiscountTabScreen"
        options={{
          title: "Discounts",
          tabBarIcon: ({ color }) => (
            <ReceiptPercentIcon size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
