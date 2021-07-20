import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import Http from '../../libs/http';
import CoinstItem from './CoinsItem';
import Colors from '../../resources/colors';
import CoinsSearch from '../coinDetail/CoinsSearch';

const CoinsScreen = props => {
  const [coins, setCoins] = useState('');
  const [allCoins, setAllCoins] = useState('');
  const [loading, setLoading] = useState('');

  const handlePress = coin => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  const handleGet = async () => {
    try {
      setLoading(true);
      const response = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );
      setCoins(response.data);
      setAllCoins(response.data);
      setLoading(false);
    } catch (error) {}
  };

  const handleSearch = query => {
    const coinsFiltered = allCoins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    setCoins(coinsFiltered);
  };

  useEffect(() => handleGet(), []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.charade,
    },
  });

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} />
      {loading ? <ActivityIndicator color="#fff" size="large" /> : null}
      <FlatList
        data={coins}
        renderItem={({item}) => (
          <CoinstItem onPress={() => handlePress(item)} item={item} />
        )}
      />
    </View>
  );
};

export default CoinsScreen;
