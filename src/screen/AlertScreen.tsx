/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

  const showAlert = () => {
    Alert.alert('Mensaje de alerta', 'Este es el contenido de mi primer mensaje de alerta', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Aceptar', onPress: () => console.log('OK Pressed')},

    ],
    {
      cancelable: true,
      onDismiss: () => console.log('ondissmiss'),
    }
  );
  };

  return (
    <View style={styles.globalMargin} >
      <HeaderTitle title="Alerts" />

      <Button
              title="Mostrar alerta"
              onPress={showAlert}
      />
    </View>
  );
};
