import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image
        style={styles.userLogo}
        source={require("../assets/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    flexDirection: "row",
    width: "100%",
    height: 75,
    paddingVertical: 10,

    backgroundColor: Colors.darkHeader,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    textAlign: "center",
    paddingLeft: 10,
    color: "white",
    fontSize: 26,
  },
  userLogo: {
    borderRadius: 30,
    width: 40,
    height: 40,
  },
});

export default Header;
