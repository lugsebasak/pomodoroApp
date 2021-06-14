import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Text,
  Alert,
} from "react-native";

import Colors from "../../constants/Colors";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
  };

  const addingTask = () => {
    if (enteredTask === null || enteredTask === "") {
      Alert.alert(
        "Invalid Task",
        "You should write something. Let's try again!",
        [{ text: "Okay", style: "destructive", onPress: setEnteredTask("") }]
      );
      return;
    }
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.modalView}>
        <TextInput
          placeholder=" New task"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={Colors.purpleBlue}
              title="Add"
              onPress={addingTask}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={Colors.pink}
              title="Cancel"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: Colors.water,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  inputContainer: {
    padding: 20,
    paddingTop: 50,
    paddingLeft: 7,
    backgroundColor: Colors.bgorange,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: 50,
    backgroundColor: "#cccc",
    width: 240,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 7,
    padding: 5,
  },
  buttonContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "45%",
  },
});

export default TaskInput;
