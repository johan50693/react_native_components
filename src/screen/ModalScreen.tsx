/* eslint-disable prettier/prettier */
import React, { useState} from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(false);
  return (
      <View style={styles.globalMargin}>
        <HeaderTitle title="Modal Screen" />

        <Button
          title="Abrir modal"
          onPress={() => setIsVisible(true)}
        />

        <Modal
          animationType="fade"
          visible={isVisible}
          transparent={true}
         >
          {/* Background negro */}
          <View style= {{
            flex:1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Contenido del modal */}
            <View style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
              <Text style={{fontSize: 10, fontWeight: '300', marginBottom: 20}}>Cuerpo del modal</Text>
              <Button
                title="Cerrar"
                onPress={() => setIsVisible(false)}
              />
            </View>
          </View>
         </Modal>

      </View>
  );
};
