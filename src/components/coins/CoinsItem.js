import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import Colors from '../../resources/colors';

const CoinstItem = ({item, onPress}) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) return require('../../assets/arrow_up.png');
    else return require('../../assets/arrow_down.png');
  };

  return (
    <Pressable onPress={onPress} style={style.container}>
      <View style={style.line}>
        <Text style={style.symbolText}>{item.symbol}</Text>
        <Text style={style.nameText}>{item.name}</Text>
        <Text style={style.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={style.line}>
        <Text style={style.percentText}>{item.percent_change_1h}</Text>
        <Image style={style.imgIcon} source={getImgArrow()} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    flexDirection: 'row',
    padding: 16,
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 12,
  },
  priceText: {
    color: '#fff',
  },
  percentText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 8,
  },
  imgIcon: {
    height: 22,
    width: 22,
  },
});

export default CoinstItem;
