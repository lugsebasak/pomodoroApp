import React, { useState } from "react";
import { View, StyleSheet, Animated, Alert, Button } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import Colors from "../constants/Colors";

const WorkCountdown = (props) => {
  const [key, setKey] = useState(0);
  let [isBreak, setIsBreak] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10);
  const [isPlaying, setIsPlaying] = useState(true);

  const timeMinSec = (remainingTime) => {
    if (remainingTime === 0) {
      setIsBreak = !isBreak;
      if (isBreak === true) {
        breakTime();
      } else if (isBreak === false) workTime();
    }
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (seconds < 10) return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  const workTime = () => {
    Alert.alert("Break is over. Let's focus!"),
      [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => {
            setKey((prevKey) => prevKey + 1);
            setTimerDuration(10);
          },
        },
      ];
    return;
  };
  const breakTime = () => {
    Alert.alert("Time Is Up!", "Let's take a break :)", [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => {
          setTimerDuration(5);
          setKey((prevKey) => prevKey + 1);
        },
      },
    ]);
    return;
  };

  return (
    <View>
      <View style={styles.timer}>
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={timerDuration}
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
      <Button
        color={Colors.darkBlue}
        title="Restart"
        style={styles.restartButton}
        onPress={() => {
          setKey((prevKey) => prevKey + 1);
        }}
      />
    </View>
  );
};
//{setKey((prevKey) => prevKey + 1)}

const styles = StyleSheet.create({
  timer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.generalBackground,
    padding: 20,
  },
  restartButton: {
    width: "10%",
    padding: 30,
  },
});

export default WorkCountdown;
