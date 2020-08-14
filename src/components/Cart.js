import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';

import LottieView from 'lottie-react-native';

const Cart = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Cart</Text>
      <LottieView
        style={{ marginTop: 50 }}
        autoPlay
        loop
        source={require('../../assets/animation/shopping-cart.json')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F7',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    // backgroundColor: 'tomato',
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
export default Cart;
