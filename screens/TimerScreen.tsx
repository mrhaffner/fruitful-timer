import React from 'react';
import { Text, View } from 'react-native';
import Timer from '../components/timer';

const TimerScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timer!</Text>
      <Timer />
    </View>
  );
};

export default TimerScreen;
