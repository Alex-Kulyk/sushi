import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { addItemCart, removeItemCart } = useContext(Context);
  const { title, subtitle, image, id, price, quantity } = item;

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{
          width: '100%',
          height: 250,
          borderRadius: 15,
          marginVertical: 10,
        }}
      />
      <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>
        {title}
      </Text>
      <Text
        style={{
          alignSelf: 'flex-end',
          color: 'red',
          fontSize: 17,
          fontWeight: 'bold',
        }}
      >
        {price}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          // backgroundColor: 'red',
        }}
      >
        <TouchableOpacity onPress={() => removeItemCart(item)}>
          <MaterialCommunityIcons name='minus' size={24} color='black' />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
          {/* <AntDesign name='left' size={24} color='black' /> */}
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            {quantity}
          </Text>
          {/* <AntDesign name='right' size={24} color='black' /> */}
        </View>
        <TouchableOpacity onPress={() => addItemCart(item)}>
          <MaterialCommunityIcons name='plus' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
export default CartItem;
