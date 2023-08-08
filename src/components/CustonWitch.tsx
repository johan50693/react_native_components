/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import {Platform, Switch} from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustonWitch = ({isOn, onChange}: Props) => {

  const {theme:{colors}} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#d9d9db', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
