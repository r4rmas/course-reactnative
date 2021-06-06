import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const CoinsScreen = props => {
  const handlePress = () => {
    props.navigation.navigate('CoinDetail');
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 10,
      backgroundColor: 'darkcyan',
      marginTop: 10,
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Coins Screen</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text>Ir a detail</Text>
      </Pressable>
    </View>
  );
};

export default CoinsScreen;
