import { StatusBar } from "expo-status-bar";
import React from "react";
import { Easing } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen.js";
import RecoverScreen from "./Screens/RecoverScreen.js";

import { ExampleScreen, OtherScreen, AppScreen } from "./Screens/Example.js";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const config = {
  animation: "timing",
  config: {
    duration: 300,
    easing: Easing.linear,
  },
};

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ExampleScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "OtherScreen") {
            iconName = focused ? "account" : "account-outline";
          } else if (route.name === "AppScreen") {
            iconName = focused ? "apps" : "apps-box";
          }
          return <IconMaterial name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="ExampleScreen" component={ExampleScreen} />
      <Tab.Screen name="AppScreen" component={AppScreen} />
      <Tab.Screen name="OtherScreen" component={OtherScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecoverScreen"
          component={RecoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="My Home" component={TabNav} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
