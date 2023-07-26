/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

  const loadMore = () => {

    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = ( item:number) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/200/300`} />
      );
    };
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${item}/200/300`}}
    //   style={{
    //     width: '100%',
    //     height: 400,
    //   }}
    // />

  return (
      <View style={{flex:1}}>

        <FlatList
          data ={numbers}
          keyExtractor={(item) =>  item.toString() }
          renderItem={({item}) => renderItem(item) }

          ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
          onEndReached={ loadMore}
          onEndReachedThreshold={0.5}

          ListFooterComponent={ () => (
            <View style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <ActivityIndicator size={50} color="5856d6" />
            </View>
          )}
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
