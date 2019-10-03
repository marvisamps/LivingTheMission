import React from 'react';
import {FlatList, View, Text} from 'react-native';

const index = ({data}) => {
  return (
    <FlatList
      keyExtractor={item => String(item.position)}
      data={data}
      renderItem={({item}) => (
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#EEE',
            borderBottomWidth: 1,
          }}>
          <Text>{item.position}</Text>
          <Text>{item.person}</Text>
          <Text>{`${item.totalPoints}pts`}</Text>
        </View>
      )}
    />
  );
};

export default index;
