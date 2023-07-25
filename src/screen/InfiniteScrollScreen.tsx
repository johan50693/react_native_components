/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { FlatList } from 'react-native-gesture-handler';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

  const loadMore = () => {

    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = ( item:number) => {
    return (
      <Text style={styles.textitem}>
        {item}
      </Text>
    );
  };

  return (
      <View style={{flex:1, backgroundColor: 'red'}}>

        <FlatList
          data ={numbers}
          keyExtractor={(item) =>  item.toString() }
          renderItem={({item}) => renderItem(item) }

          ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
          onEndReached={ loadMore}
          onEndReachedThreshold={0.5}
        />

      </View>
  );
};

const styles = StyleSheet.create({
    textitem : {
      backgroundColor: 'green',
      height: 150,
    },
});
