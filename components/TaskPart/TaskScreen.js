import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import React, { useState, Component } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

import Colors from "../../constants/Colors";

const TaskScreen = () => {
  const [taskList, setTaskList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
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
    <View style={styles.taskScreen}>
      <Button
        style={styles.addButton}
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
  );
};

const styles = StyleSheet.create({
  taskScreen: {
    flex: 1,
    padding: 50,
    flexDirection: "column",
  },
  addButton: {
    borderRadius: 7,
    color: Colors.blueForHeader,
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default TaskScreen;
