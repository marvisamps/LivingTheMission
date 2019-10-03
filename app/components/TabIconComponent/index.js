import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 19,
    height: 18,
  },
});

const resolveRequire = name => {
  switch (name) {
    case 'Profile':
      return require('../../assets/icons/tabs/Profile.png');
    case 'Ranking':
      return require('../../assets/icons/tabs/Ranking.png');
    case 'Help':
      return require('../../assets/icons/tabs/Help.png');
    default:
  }
};

const TabIconComponent = ({name}) => {
  return <Image style={styles.icon} source={resolveRequire(name)} />;
};

export default TabIconComponent;
