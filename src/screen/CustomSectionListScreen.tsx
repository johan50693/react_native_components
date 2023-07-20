/* eslint-disable prettier/prettier */
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin', 'Flash', 'Linterna Verde', 'La Mujer Maravilla', 'Shazam', 'Harley' ],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman','Ironman', 'Hulk', 'Pantera Negra', 'La viuda Negra', 'La Bruja Escarlata', 'Dr. Stringe' ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama', 'Janamichi', 'Kirito', 'Senku', 'Saori', 'Matt', 'Yugi', 'Pikachu', 'Naruto' ],
  },
];

export const CustomSectionListScreen = () => {
  return (
      <View style={{...styles.globalMargin, flex: 1}} >

        <SectionList
          sections={casas}
          keyExtractor={(item,index) => item + index}
          renderItem={({item}) => <Text>{item}</Text>}
          stickySectionHeadersEnabled
          renderSectionHeader={ ({section}) => (
            <View style={{ backgroundColor: 'white'}}>
              <HeaderTitle title={section.casa} />
            </View>
            )
          }
        />
      </View>
  );
};
