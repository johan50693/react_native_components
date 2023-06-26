/* eslint-disable prettier/prettier */
import React from 'react';
import {View, FlatList} from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {

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
        ListHeaderComponent={ () => <HeaderTitle title="Opciones del menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
