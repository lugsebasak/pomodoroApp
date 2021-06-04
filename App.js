import React, { Component, useState } from "react";
import { render } from "react-dom";
import { AppLoading } from "expo";
import * as Font from "expo-font";
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
import WorkCountdown from "./components/WorkCountdown";

const fentchFonts = () => {
  Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.tff"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.tff"),
  });
};

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const [key, setKey] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded)
    return (
      <AppLoading
        startAsync={fentchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );

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

  const restartHandler = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header style={styles.title_text} title="POMODORO" />
      <View style={styles.timer}>
        <WorkCountdown />
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
    alignItems: "center",
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
