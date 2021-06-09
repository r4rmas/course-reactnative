import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../resources/colors';

const CoinDetailScreen = ({item}) => {
  return (
    <View style={style.container}>
      <Text style={style.nameText}>{item.name}</Text>
      <Text style={style.priceText}>{item.price_usd}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: Colors.charade,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  nameText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priceText: {
    color: '#fff',
  },
});

export default CoinDetailScreen;
