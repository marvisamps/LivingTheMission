import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import RankingScreen from './app/screens/Ranking';
import ProfileScreen from './app/screens/Profile';
import HelpScreen from './app/screens/Help';

import TabIconComponent from './app/components/TabIconComponent';

const TabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileScreen,
    Ranking: RankingScreen,
    Help: HelpScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        return <TabIconComponent name={routeName} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
