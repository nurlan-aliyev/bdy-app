import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    fontSize: 26,
    paddingBottom: 10,
    color: "#212529",
  },
  signInPar: {
    fontSize: 18,
    color: "#646f79",
    marginBottom: 15,
    textAlign: "center",
  },
  textField: {
    width: deviceWidth - 100,
    borderColor: "#707070",
    borderWidth: 1,
    margin: 10,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    borderRadius: 20,
  },
  succesBtn: {
    backgroundColor: "#21C87A",
    width: deviceWidth - 100,
    margin: 10,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
});

export { styles };