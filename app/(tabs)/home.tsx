import React from "react";
import { Dimensions, Text, View } from "react-native";
import ScreenContainer from "@/components/ScreenContainer";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <ScreenContainer>
      <View
        className="w-full flex justify-center h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
          Sign in to Aora Home
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default Home;
