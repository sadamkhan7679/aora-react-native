import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AppStatusBar from "@/components/AppStatusBar";
import Loader from "@/components/Loader";
import { useGlobalContext } from "@/context/Global";

// import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  const { loading, isLogged, user } = useGlobalContext();
  console.log("loading", loading);
  console.log("user", user);
  console.log("isLogged", isLogged);

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <Loader isLoading={false} />
      <AppStatusBar />
    </>
  );
};

export default AuthLayout;
