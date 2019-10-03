import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import RankingScreen from './app/screens/Ranking';
import ProfileScreen from './app/screens/Profile';
import FaqScreen from './app/screens/Faq';

const TabNavigator = createBottomTabNavigator({
  Profile: ProfileScreen,
  Ranking: RankingScreen,
  Faq: FaqScreen,
});

const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
