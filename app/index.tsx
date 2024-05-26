import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">AORA</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Home
      </Link>
    </View>
  );
}
