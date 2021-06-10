import React from 'react';
import {View, StyleSheet} from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../resources/colors';

const FavoritesScreen = () => {
  return (
    <View style={style.container}>
      <FavoritesEmptyState />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
