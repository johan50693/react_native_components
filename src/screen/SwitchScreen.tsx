/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Switch, Platform, Text, StyleSheet} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustonWitch } from '../components/CustonWitch';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive,isHappy,isHungry} = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}} >

       <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText} >isActive</Text>
        <CustonWitch isOn={isActive} onChange={ (value) => onChange(value,'isActive')} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText} >isHungry</Text>
        <CustonWitch isOn={isHungry} onChange={ (value) => onChange(value,'isHungry')} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText} >isHappy</Text>
        <CustonWitch isOn={isHappy} onChange={ (value) => onChange(value,'isHappy')} />
      </View>

      <Text style={styles.switchText} >
        {JSON.stringify(state,null,5)}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    switchText: {
      fontSize: 25,
    },
});
