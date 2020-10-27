import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function ExampleScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("OtherScreen")}
      >
        <Text>Go to other screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const OtherScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ExampleScreen")}
      >
        <Text>Go to Example screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const AppScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ExampleScreen")}
      >
        <Text>Go to Example Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export { ExampleScreen, OtherScreen, AppScreen };
