import React, { useState } from "react";
import { render } from "react-dom";
import { useFonts } from "expo-font";
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
});
