import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Constants from 'expo-constants';
import { Context } from '../context/CartContext';

import LottieView from 'lottie-react-native';
import AppButton from '../components/Button';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { state, clearCart } = useContext(Context);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      if (state.cart.length > 0) {
        setTotal(
          state.cart.reduce((acc, el) => acc + +el.price * +el.quantity, 0)
        );
      }
    }
    return () => {
      isActive = false;
    };
  }, [state.cart]);
  console.log(total);
  // console.log('Cart');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: 'tomato',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.text}>Cart</Text>
        {state.cart.length === 0 ? null : (
          <AppButton
            title='clear'
            style={{ marginHorizontal: 20 }}
            onPress={clearCart}
          />
        )}
      </View>
      <FlatList
        style={{ marginHorizontal: 10 }}
        keyExtractor={(item) => item.id.toString()}
        data={state.cart}
        renderItem={({ item }) => <CartItem item={item} />}
        showsVerticalScrollIndicator={false}
      />

      {state.cart.length === 0 ? (
        <LottieView
          style={{ marginTop: 50 }}
          autoPlay
          loop
          source={require('../../assets/animation/shopping-cart.json')}
        />
      ) : (
        <Text
          style={{
            fontSize: 30,
            marginTop: 30,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          Total:{`${total}`}
        </Text>
      )}
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
