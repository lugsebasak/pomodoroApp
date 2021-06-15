import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class TimerDisplay extends Component {
  state = {};
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: "4%",
    marginBottom: "5%",
    padding: "12%",
    borderColor: "white",
    borderRadius: 60,
    borderWidth: 3,
  },
  textStyle: {
    color: "white",
    fontSize: 50,
    fontWeight: "400",
  },
});

export default TimerDisplay;
