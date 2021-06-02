/*import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Text,
  Alert,
  Animated,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import BreakCountdown from "./BreakCountdown";
import WorkCountdown from "./WorkCountdown";
import Colors from "../constants/Colors";

const Countdown = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);

  /* const [isTimeToWork, setIsTimeToWork] = setState(false);
    const [isTimeToBreak, setIsTimeToBreak] = setState(false);

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
              setIsTimeToWork(false);
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
        duration={props.duration}
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

const styles = StyleSheet.create({
  timer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.generalBackground,
    padding: 8,
  },
});

export default Countdown;






BREAK-COUNTDOWN.JS

import React, { useState } from "react";
import { View, StyleSheet, Animated, Alert } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import Colors from "../constants/Colors";
import Countdown from "./Countdown";
import WorkCountdown from "./WorkCountdown";

const BreakCountdown = (props) => {
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [isWork, setIsWork] = useState(false);

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
          setIsWork(true);
        },
      },
    ]);
    return;
  };

  if (props.isBreak === true) {
    return <Countdown duration={300} timeMinSec />;
  }
};

const styles = StyleSheet.create({
  timer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.generalBackground,
    padding: 8,
  },
});

export default BreakCountdown;
*/
