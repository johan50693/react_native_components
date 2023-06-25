/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';


const menuItems: MenuItem[] = [
  {
    name: 'Animarion 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animarion 102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
];

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title} >Opciones del menu</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}} >

      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={ () => renderListHeader()}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};