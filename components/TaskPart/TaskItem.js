import { styleSheets } from "min-document";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import colors from "../../constants/Colors";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState("false");

  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.taskTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.water,
    borderColor: "white",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
  },
  taskTitle: {
    color: "white",
  },
});

export default TaskItem;
