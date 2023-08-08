/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

  const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext);

  return (
      <View style={styles.globalMargin}>
        <HeaderTitle title="Theme" />

          <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
            onPress={setLightTheme}
              style={{
                width: 150,
                height: 50,
                borderRadius: 20,
                backgroundColor: colors.primary,
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
                Light
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={setDarkTheme}
              style={{
                width: 150,
                height: 50,
                borderRadius: 20,
                backgroundColor: colors.primary,
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
                Dark
              </Text>
            </TouchableOpacity>
          </View>
      </View>
  );
};
