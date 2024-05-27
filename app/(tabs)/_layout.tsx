import { Redirect, Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Fragment } from "react";
import { appIcons } from "@/constants/icons";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const tabScreens = [
    {
      name: "home",
      icon: appIcons.home,
      title: "Home",
    },

    {
      name: "bookmark",
      icon: appIcons.bookmark,
      title: "Bookmark",
    },

    {
      name: "create",
      icon: appIcons.plus,
      title: "Create",
    },

    {
      name: "profile",
      icon: appIcons.profile,
      title: "Profile",
    },
  ];

  return (
    <Fragment>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {tabScreens.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={tab.icon}
                  color={color}
                  name={tab.title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>

      {/*<Loader isLoading={loading} />*/}
      <StatusBar backgroundColor="#161622" style="light" />
    </Fragment>
  );
};

export default TabsLayout;
