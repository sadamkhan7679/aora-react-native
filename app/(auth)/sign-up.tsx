import React, { useState } from "react";
import ScreenContainer from "@/components/ScreenContainer";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
// import { CustomButton, FormField } from "../../components";
// import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "@/context/Global";
import AppButton from "@/components/Button";
import InputField from "@/components/form-elements/input-field";
import { createUser } from "@/lib/appwrite";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const { email, password, username } = form;
      const result = await createUser({ email, password, username });
      console.log("result", result);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      // @ts-ignore
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <ScreenContainer>
      <View
        className="w-full flex justify-center h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[34px]"
        />

        <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
          Sign Up to Aora
        </Text>
        <InputField
          title="Username"
          placeholder="Enter your username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-7"
        />

        <InputField
          title="Email"
          placeholder="Enter your email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />

        <InputField
          title="Password"
          placeholder="Enter your password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />

        <AppButton
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
            href="/sign-in"
            className="text-lg font-psemibold text-secondary"
          >
            Sign In
          </Link>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SignUp;
