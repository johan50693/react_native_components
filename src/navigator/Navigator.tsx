/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import React from 'react';
import { Animation101Screen } from '../screen/Animation101Screen';
import { Animation102Screen } from '../screen/Animation102Screen';
import { SwitchScreen } from '../screen/SwitchScreen';
import { AlertScreen } from '../screen/AlertScreen';
import { TextInputScreen } from '../screen/TextInputScreen';
import { PulltoRefreshScreen } from '../screen/PulltoRefreshScreen';
import { CustomSectionListScreen } from '../screen/CustomSectionListScreen';

const Stack = createStackNavigator();

export const  Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PulltoRefreshScreen" component={PulltoRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
    </Stack.Navigator>
  );
};
