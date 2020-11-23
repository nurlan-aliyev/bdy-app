import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import Card from "./Card.js";

import { styles } from "./Components/Styles.js";

const OtherScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Screen</Text>
    </View>
  );
};

const LivingRoomTab = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "space-evenly",
      }}
    >
      <View style={styles.testContainer}>
        <Card icon="air-conditioner" title="Air Conditioner" />
      </View>
      <View style={styles.testContainer}>
        <Card icon="ceiling-light" title="Ceiling Lamp" />
      </View>
      <View style={styles.testContainer}>
        <Card icon="television" title="Television" />
      </View>
      <View style={styles.testContainer}>
        <Card icon="speaker" title="Speaker" />
      </View>
      <View style={styles.testContainer}>
        <Card icon="desk-lamp" title="Desk Lamp" />
      </View>
      <View style={styles.testContainer}>
        <Card icon="plus-circle-outline" title="Add Accessories" />
      </View>
    </ScrollView>
  );
};

const KitchenTab = () => {
  return (
    <View style={styles.singleCardContainer}>
      <Card icon="plus-circle-outline" title="Add Accessories" />
    </View>
  );
};

const BedroomTab = () => {
  return (
    <View style={styles.singleCardContainer}>
      <Card icon="plus-circle-outline" title="Add Accessories" />
    </View>
  );
};

const Bathroom = () => {
  return (
    <View style={styles.singleCardContainer}>
      <Card icon="plus-circle-outline" title="Add Accessories" />
    </View>
  );
};

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="ExampleScreen" component={HomeTabs} />
      <Tab.Screen name="AppScreen" component={AppScreen} />
      <Tab.Screen name="OtherScreen" component={OtherScreen} />
    </Tab.Navigator>
  );
}

const MyTab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <MyTab.Navigator
      initialLayout={{ width: Dimensions.get("window").width }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "checkbox-blank-circle";
          color = focused ? "green" : "grey";
          return <IconMaterial name={iconName} size={10} color={color} />;
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: {
          width: 100,
          flex: 1,
          flexDirection: "row-reverse",
        },
        style: {
          borderWidth: 0,
        },
        scrollEnabled: true,
        showIcon: true,
        iconStyle: {
          flex: 1,
          alignSelf: "center",
          marginTop: 2,
          marginRight: -20,
        },
      }}
      sceneContainerStyle={{ overflow: "scroll" }}
    >
      <MyTab.Screen name="Living Room" component={LivingRoomTab} />
      <MyTab.Screen name="Kitchen" component={KitchenTab} />
      <MyTab.Screen name="Bedroom" component={BedroomTab} />
      <MyTab.Screen name="Bathroom" component={Bathroom} />
    </MyTab.Navigator>
  );
}

const AppScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Appliances Screen</Text>
    </View>
  );
};

export { TabNav };
