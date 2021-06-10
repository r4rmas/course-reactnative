import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../resources/colors';
import Storage from '../../libs/storage';
import CoinsItem from '../coins/CoinsItem';

const FavoritesScreen = props => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter(key => key.includes('favorite-'));
      const favs = await Storage.instance.getAll(keys);
      const favorites = favs.map(fav => JSON.parse(fav[1]));
      setFavorites(favorites);
    } catch (error) {}
  };

  const handlePress = coin => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  useEffect(() => {
    props.navigation.addListener('focus', getFavorites);
    return () => {
      props.navigation.removeListener('focus', getFavorites);
    };
  });

  return (
    <View style={style.container}>
      {favorites.length === 0 ? (
        <FavoritesEmptyState />
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
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
