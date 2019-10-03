import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import Ranking from '../../components/Ranking';
import {rankingData} from '../../assets/mock';

import styles from './styles';

export default class RankingScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            jsutifyContent: 'space-between',
          }}>
          <Text>Ranking</Text>
          <Text>Atualizado há 15 minutos</Text>
        </View>
        <Ranking data={rankingData.people} />
      </SafeAreaView>
    );
  }
}
