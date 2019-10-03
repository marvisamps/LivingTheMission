import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';

import styles from './styles';

const index = ({data}) => (
  <>
    <View style={styles.container}>
      <View>
        <Text style={styles.titleRating}>Ranking</Text>
      </View>
      <View>
        <Text>Atualizado há 15 minutos</Text>
      </View>
    </View>
    <FlatList
      style={styles.flatList}
      keyExtractor={item => String(item.position)}
      data={data}
      renderItem={({item}) => (
        <View style={styles.flatListItem}>
          <View style={styles.flatListTexts}>
            <Text style={styles.itemPosition}>{item.position}</Text>
            <Image
              style={styles.imageProfile}
              source={{
                uri: 'https://randomuser.me/api/portraits/women/36.jpg',
              }}
              onError={() => console.warn('DEU RUIM')}
              onLoadEnd={() => console.warn('LOADED')}
            />
            <Text style={styles.textName}>{item.person}</Text>
          </View>
          <View>
            <Text style={styles.textPts}>{`${item.totalPoints}pts`}</Text>
          </View>
        </View>
      )}
    />
  </>
);

export default index;
