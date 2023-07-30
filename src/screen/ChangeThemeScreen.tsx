/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ChangeThemeScreen = () => {
  return (
      <View style={styles.globalMargin}>
        <HeaderTitle title="Theme" />

        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: '#5856d6',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,

            }}
          >
            Light / Dark
          </Text>
        </TouchableOpacity>

      </View>
  );
};
