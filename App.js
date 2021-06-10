import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/resources/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    // El DarkTheme lo que hace es añadir un fondo negro a toda la pantalla de fondo
    // sin esto la aplicación tendría un mal efecto de un 'white flashing screen'
    <NavigationContainer theme={DarkTheme}>
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
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color, width: 28, height: 28}}
                source={require('./src/assets/bank.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color, width: 28, height: 28}}
                source={require('./src/assets/star.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
