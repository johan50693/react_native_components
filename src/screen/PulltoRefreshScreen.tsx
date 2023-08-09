/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';


export const PulltoRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {theme: {colors,dark}} = useContext(ThemeContext);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('hola mundo');
    }, 2500);
  };

  return (

    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.text}
          colors={[colors.background]}
          tintColor={ dark ? 'white' : 'black'}
        />
      }
    >
      <View style={styles.globalMargin} >
        <HeaderTitle title="Pull to refresh" />
        {
          data && <HeaderTitle title={data} />
        }

      </View>
    </ScrollView>
  );
};
