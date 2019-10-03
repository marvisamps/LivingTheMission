import React from 'react';
import {View, SafeAreaView, Text, Image, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';

import Ranking from '../../components/Ranking';
import {userInformation, rankingData} from '../../assets/mock';

import styles from './styles';

const width = Dimensions.get('window').width;

// name: 'Mario',
// picture: 'https://randomuser.me/api/portraits/women/36.jpg',
// currentPosition: 22,
// currentCampaign: {
//   startDate: '2019-10-01',
//   endDate: '2019-12-31',
// },

// require('../../assets/icons/tabs/Profile.png')

const Row = ({children, style}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const Header = ({userInfo}) => {
  return (
    <View style={{width: '100%', paddingVertical: 24, paddingHorizontal: 30}}>
      <Row style={{marginBottom: 12}}>
        <Image
          style={{width: 56, height: 56, borderRadius: 28}}
          source={{uri: 'https://randomuser.me/api/portraits/women/36.jpg'}}
          onError={() => console.warn('DEU RUIM')}
          onLoadEnd={() => console.warn('LOADED')}
        />

        <View
          style={{
            backgroundColor: '#652CDB',
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderRadius: 50,
          }}>
          <Text style={{color: 'white'}}>80 pts</Text>
        </View>
      </Row>

      <Row style={{marginBottom: 36}}>
        <View>
          <Text style={{fontSize: 16, lineHeight: 24}}>
            Oi {userInfo.name} 😌
          </Text>
          <Text style={{fontSize: 16, lineHeight: 24}}>
            Sua posição no ranking é
          </Text>
        </View>
        <Row style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 32,
              top: 4,
              color: '#652CDB',
              fontWeight: '300',
            }}>
            {userInfo.currentPosition}
          </Text>
          <Text style={{fontSize: 20, color: '#652CDB', fontWeight: '200'}}>
            {'/174'}
          </Text>
        </Row>
      </Row>

      <Progress.Bar
        color="#F46152"
        progress={0.9}
        width={width - 60}
        style={{marginBottom: 8}}
      />
      <Text style={{color: '#666', fontSize: 14, lineHeight: 20}}>
        {'Corre, faltam só 2 dias'}
      </Text>
    </View>
  );
};

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header userInfo={userInformation} />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            jutifyContent: 'space-between',
          }}>
          <Text>Ranking Geral</Text>
          <Text>Atualizado há 15 minutos</Text>
        </View>
        <Ranking data={rankingData.people} />
      </SafeAreaView>
    );
  }
}
