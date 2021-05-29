import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState("false");

  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={style.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
  },
});

export default TaskItem;
