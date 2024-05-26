import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProfilePage() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Profile</Text>
      <Link href="/" style={{ color: "blue" }}>
        Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
