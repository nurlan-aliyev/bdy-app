import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import IconFont from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { Formik } from "formik";
import * as yup from "yup";

import { styles } from "./Components/Styles.js";

const deviceWidth = Dimensions.get("window").width;

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

class LoginScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={styles.signInText}>Please Sign In</Text>
        <Text style={styles.signInPar}>Sign in to manage your account.</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconMaterial
                  name="email-outline"
                  size={30}
                  // color={!this.state.isFocusedEmail ? "#8F95A0" : "#000"}
                  style={{ marginRight: -6, marginLeft: -6 }}
                />
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textField}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
              </View>
              {errors.email && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Text>
              )}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconFont
                  name="lock"
                  size={30}
                  // color={!this.state.isFocusedPass ? "#8F95A0" : "#000"}
                />
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textField}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
              </View>
              {errors.password && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Text>
              )}
              <TouchableOpacity
                style={{
                  margin: 10,
                  left: deviceWidth - deviceWidth * 0.79,
                }}
                onPress={() => this.props.navigation.replace("RecoverScreen")}
              >
                <Text style={{ color: "#21C87A", fontSize: 14 }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.succesBtn}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.btnText}>Sign In</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Text style={styles.signInPar}>Do not have an account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 8 }}
            onPress={() => this.props.navigation.replace("RegisterScreen")}
          >
            <Text style={{ color: "#21C87A", fontSize: 16 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
