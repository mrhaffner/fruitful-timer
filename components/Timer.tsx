import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const StartButton = (
    <Button mode="contained" onPress={() => handleStart()}>
      Start
    </Button>
  );

  const ActiveButtons = (
    <>
      <Button mode="contained" onPress={() => handlePauseResume()}>
        {isPaused ? 'Resume' : 'Pause'}
      </Button>
      <Button mode="contained" onPress={() => handleReset()}>
        Reset
      </Button>
    </>
  );

  return (
    <View>
      <Text>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</Text>
      <Text>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</Text>
      <Text>{('0' + ((time / 10) % 100)).slice(-2)}</Text>
      {isActive ? ActiveButtons : StartButton}
    </View>
  );
};

export default Timer;
