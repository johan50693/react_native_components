import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigator} from './src/navigator/Navigator';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
