import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SectionList,
} from 'react-native';
import Http from '../../libs/http';
import Colors from '../../resources/colors';
import CoinMarketItem from './CoinMarketItem';

const CoinDetailScreeen = props => {
  const [coin, setCoin] = useState('');
  const [markets, setMarkets] = useState('');

  const getSymbolIcon = name => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  const getSections = coin => {
    const sections = [
      {
        title: 'Market Cap.',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24H',
        data: [coin.volume24],
      },
      {
        title: 'Change 24H',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  const getMarkets = async coinId => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    setMarkets(markets);
  };

  useEffect(() => {
    const {coin} = props.route.params;
    props.navigation.setOptions({title: coin.symbol});
    getMarkets(coin.id);
    setCoin(coin);
  });

  return (
    <View style={style.container}>
      <View style={style.subHeader}>
        <Image style={style.iconImg} source={{uri: getSymbolIcon(coin.name)}} />
        <Text style={style.titleText}>{coin.name}</Text>
      </View>
      <SectionList
        style={style.section}
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={style.sectionItem}>
            <Text style={style.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={style.sectionHeader}>
            <Text style={style.sectionText}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={style.marketsTitle}>Markets</Text>
      <FlatList
        // keyExtractor={item => item}
        style={style.list}
        horizontal={true}
        data={markets}
        renderItem={({item}) => <CoinMarketItem item={item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconImg: {
    height: 25,
    width: 25,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  list: {
    maxHeight: 80,
    paddingLeft: 6,
    paddingRight: 6,
  },
  marketsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 16,
  },
});

export default CoinDetailScreeen;
