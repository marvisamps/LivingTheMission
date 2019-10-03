import React from 'react';
import {SafeAreaView} from 'react-native';
import Ranking from '../../components/Ranking';
import {rankingData} from '../../assets/mock';

import styles from './styles';

const RankingScreen = () => (
  <SafeAreaView style={styles.container}>
    <Ranking data={rankingData.people} />
  </SafeAreaView>
);

export default RankingScreen;
