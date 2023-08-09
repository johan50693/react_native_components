/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustonWitch } from '../components/CustonWitch';
import { ThemeContext } from '../context/theme/ThemeContext';

const initialState = {
  name: '',
  email: '',
  phone: '',
  isSubscribed: false,
};

export const TextInputScreen = () => {

  const {onChange, form, isSubscribed} = useForm(initialState);
  const {theme:{colors,dividerColor}} = useContext(ThemeContext);

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.globalMargin} >
              <HeaderTitle title="TextInput" />

              <TextInput
                style={{
                  ...stylesScreen.inputStyle,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholder="Ingrese su nombre"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={ (value) => onChange(value,'name') }
                placeholderTextColor={dividerColor}
              />

              <TextInput
                style={{
                  ...stylesScreen.inputStyle,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholder="Ingrese su email"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={ (value) => onChange(value,'email') }
                keyboardType="email-address"
                placeholderTextColor={dividerColor}
              />

              <View style={stylesScreen.switchRow}>
                <Text style={stylesScreen.switchText} >Suscribirme</Text>
                <CustonWitch isOn={isSubscribed} onChange={ (value) => onChange(value,'isSubscribed')} />
              </View>
              <HeaderTitle title={JSON.stringify(form,null,2)} />
              <HeaderTitle title={JSON.stringify(form,null,2)} />
              <TextInput
                style={{
                  ...stylesScreen.inputStyle,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholder="Ingrese su telefono"
                onChangeText={ (value) => onChange(value,'phone') }
                keyboardType="phone-pad"
                placeholderTextColor={dividerColor}
              />

              <View style={{height:100}} />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
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
