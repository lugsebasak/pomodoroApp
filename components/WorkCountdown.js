import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import Colors from "../constants/Colors";
import BreakCountdown from "./BreakCountdown";

const WorkCountdown = (props) => {
  const [key, setKey] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  const timeMinSec = (remainingTime) => {
    if (remainingTime === 0) {
      timeIsUp();
    }
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (seconds < 10) return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  const timeIsUp = () => {
    Alert.alert("Time Is Up!", "Let's take a break :)", [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => {
          setIsBreak(true);
          setKey((prevKey) => prevKey + 1);
        },
      },
    ]);
    return;
  };

  return (
    <View style={styles.timer}>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        duration={1500}
        colors={[
          ["#004777", 0.4],
          ["#F7B801", 0.4],
          ["#A30000", 0.2],
        ]}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor, fontSize: 35 }}>
            {timeMinSec(remainingTime)}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
};
//{setKey((prevKey) => prevKey + 1)}

const styles = StyleSheet.create({
  timer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.generalBackground,
    padding: 8,
  },
});

export default Break;
