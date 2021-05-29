import React, { Component, useState } from "react";
import { render } from "react-dom";
AppRegistry.registerComponent("main", () => App);
import {
  StyleSheet,
  SafeAreaView,
  Button,
  FlatList,
  View,
  Animated,
  Text,
  Alert,
} from "react-native";

import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Colors from "./constants/Colors";
import Header from "./components/Header";
import BreakCountdown from "./components/BreakCountdown";
import WorkCountdown from "./components/WorkCountdown";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = (taskTitle) => {
    //I need a list to hold tasks
    //burada currentTasks adında bir  array oluşturdum. ...currentTasks ile eskiverilerin hepsini çektim ve enteredTask'i ekledim.
    //Bu birden fazla kez çalışacağı için eski verilerimin de alınması gerekiyordu.
    setTaskList((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), newTask: taskTitle },
    ]);
    setIsAddMode(false);
  };

  const removeTaskHandler = (taskId) => {
    setTaskList((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const cancelTaskHandler = () => {
    setIsAddMode(false);
  };

  /*const timeMinSec = (remainingTime) => {
    if (remainingTime === 0) {
      timeIsUp();
    }
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (seconds < 10) return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  };
*/

  const restartHandler = () => {
    setKey((prevKey) => prevKey + 1);
  };

  /*const timeIsUp = () => {
    Alert.alert("Time Is Up!", "Let's take a break :)", [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => {
          setIsBreak(true);
          <Break />;
          setKey((prevKey) => prevKey + 1);
        },
      },
    ]);
    return;
  };*/

  return (
    <SafeAreaView style={styles.screen}>
      <Header style={styles.title_text} title="POMODORO" />
      <View style={styles.timer}>
        <WorkCountdown />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Restart"
          style={styles.timerButton}
          onPress={() => {
            restartHandler;
          }}
        />
        <Button title="Pause" />
      </View>
      <View style={styles.taskScreen}>
        <Button
          color={Colors.water}
          title="Add New Task"
          onPress={() => setIsAddMode(true)}
        />
        <TaskInput
          visible={isAddMode}
          onAddTask={addTaskHandler}
          onCancel={cancelTaskHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={taskList}
          renderItem={(itemData) => (
            <TaskItem
              id={itemData.item.id}
              onDelete={removeTaskHandler}
              title={itemData.item.newTask}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.generalBackground,
    justifyContent: "space-around",
    flex: 1,
    paddingBottom: 150,
  },
  taskScreen: {
    alignItems: "center",
    paddingBottom: 50,
  },
  title_text: {
    marginBottom: 30,
    color: "#C12828",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "700",
  },
  timer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.generalBackground,
    padding: 8,
  },
  buttonContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  timerButton: {
    width: "45%",
  },
});

/*onComplete={() => {
            {
              timeIsUp;
            }
          }}*/
