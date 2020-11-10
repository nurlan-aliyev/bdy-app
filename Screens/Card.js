import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import IconFont from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./Components/Styles.js";

export default function Card(props) {
  const [onIndicator, setOnIndicator] = useState("OFF");
  const [powerIndicator, setPowerIndicator] = useState(false);
  let iconName = props.icon;

  if (props.title !== "Add Accessories") {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <IconMaterial size={40} name={iconName} />
          <Text style={styles.iconText}>{props.title}</Text>
        </View>

        <View style={styles.powerContainer}>
          <TouchableOpacity
            onPress={() => {
              setPowerIndicator(powerIndicator ? false : true);
              setOnIndicator(onIndicator === "OFF" ? "ON" : "OFF");
            }}
          >
            <IconMaterial
              name="power"
              size={30}
              color={powerIndicator ? "red" : "gray"}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconMaterial name="arrow-right" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.onIndicatorContainer}>
          <Text
            style={{
              color: onIndicator === "OFF" ? "gray" : "green",
              fontSize: 16,
              fontWeight: onIndicator === "OFF" ? "normal" : "200",
            }}
          >
            {onIndicator}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <IconMaterial size={40} name={iconName} />
      </TouchableOpacity>
      <Text style={styles.iconText}>{"Add\nAccessories"}</Text>
    </View>
  );
}
