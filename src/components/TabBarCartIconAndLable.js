import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/CartContext';

import { AntDesign } from '@expo/vector-icons';

const TabBarCartIconAndLable = ({ size, color }) => {
  const {
    state: { cart },
  } = useContext(Context);

  return (
    <View style={styles.container}>
      <AntDesign
        name='shoppingcart'
        size={size}
        color={color}
        style={{ marginRight: 4 }}
      />
      {cart.length > 0 ? (
        <Text
          style={{
            position: 'absolute',
            left: 13,
            bottom: 13,
            color: 'red',
            fontWeight: 'bold',
          }}
        >
          {cart.length}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'tomato',
    // overflow: 'hidden',
  },
});
export default TabBarCartIconAndLable;
