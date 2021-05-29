import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image
        style={styles.userLogo}
        source={require("../assets/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    paddingVertical: 10,
    backgroundColor: Colors.orange,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    paddingTop: 32,
    textAlign: "center",
    paddingLeft: 10,
    paddingBottom: 20,
    color: "black",
    fontSize: 24,
  },
  userLogo: {
    borderRadius: 30,
    width: 40,
    height: 40,
  },
});

export default Header;
