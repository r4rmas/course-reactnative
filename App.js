import React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/resources/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer theme={BackgroundTheme}>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: Colors.blackPearl,
          },
        }}>
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? '#fff' : Colors.picton}}>
                Coins
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  tintColor: focused ? '#fff' : Colors.picton,
                  width: 28,
                  height: 28,
                }}
                source={require('./src/assets/bank.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? '#fff' : Colors.picton}}>
                Favorites
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  tintColor: focused ? '#fff' : Colors.picton,
                  width: 28,
                  height: 28,
                }}
                source={require('./src/assets/star.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const BackgroundTheme = {
  dark: true,
  colors: {
    background: Colors.charade,
  },
};

export default App;
