import React, { useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  FlatList,
  View,
  Animated,
  Text,
  Alert,
  DrawerLayoutAndroid,
} from "react-native";

import Colors from "./constants/Colors";
import TaskScreen from "./components/TaskPart/TaskScreen";
import PomodoroTimer from "./components/TimerPart/PomodoroTimer";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.title_text} title="Pomodory" />
        <PomodoroTimer />
        <View style={styles.taskScreen}>
          <TaskScreen />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.water,
    // alignItems: "center",
    // justifyContent: "center"s
  },
  taskScreen: {
    flex: 1,
  },
  title_text: {
    color: "#C12828",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "700",
    paddingTop: 50,
  },
});
