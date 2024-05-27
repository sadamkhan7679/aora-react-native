import { Dimensions, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ScreenContainer from "@/components/ScreenContainer";
import React from "react";

export default function ProfilePage() {
  return (
    <ScreenContainer>
      <View
        className="w-full flex justify-center h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
          Profile
        </Text>
      </View>
    </ScreenContainer>
  );
}
