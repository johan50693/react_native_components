/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/theme/ThemeContext';

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
  const {theme:{colors}} = useContext(ThemeContext);

  return (
      <View style={{...styles.globalMargin, flex: 1}} >

        <SectionList
          sections={casas}
          keyExtractor={(item,index) => item + index}
          ListHeaderComponent={ () => <HeaderTitle title="Section list" />}
          ListFooterComponent={ () => (
            <View style={{marginBottom: 50}} >
              <HeaderTitle title={'Total de casas ' + casas.length} />
            </View>
          )}
          renderItem={({item}) => <Text>{item}</Text>}
          stickySectionHeadersEnabled
          renderSectionHeader={ ({section}) => (
            <View style={{ backgroundColor: colors.background}}>
              <HeaderTitle title={section.casa} />
            </View>
            )
          }
          renderSectionFooter={({section}) => (
            <HeaderTitle title={'Total: ' + section.data.length} />
          )}
          SectionSeparatorComponent={() => <ItemSeparator />}
          ItemSeparatorComponent={ () => <ItemSeparator />}
          showsVerticalScrollIndicator= {false}
        />
      </View>
  );
};
