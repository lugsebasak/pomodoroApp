import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import Colors from "../constants/Colors";

const BreakCountdown = (props) => {
  const [key, setKey] = useState(0);
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={isPlaying}
      duration={300}
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

export default Break;
