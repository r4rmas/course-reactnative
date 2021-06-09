import React, {useState} from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';
import Colors from '../../resources/colors';

const CoinsSearch = props => {
  const [query, setQuery] = useState('');

  const handleText = query => {
    setQuery(query);
    if (props.onChange) props.onChange(query);
  };

  return (
    <View>
      <TextInput
        onChangeText={handleText}
        value={query}
        placeholder="Search coin"
        placeholderTextColor="#fff"
        style={style.textInput}
      />
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    color: '#fff',
    backgroundColor: Colors.charade,
    fontSize: 16,
    height: 46,
    paddingLeft: 16,
  },
});

export default CoinsSearch;
