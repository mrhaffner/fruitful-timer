import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SummaryScreen from './screens/SummaryScreen';
import TagsScreen from './screens/TagsScreen';
import TimerScreen from './screens/TimerScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Tab.Navigator>
          <Tab.Screen name="Summary" component={SummaryScreen} />
          <Tab.Screen name="Tags" component={TagsScreen} />
          <Tab.Screen name="Timers" component={TimerScreen} />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
