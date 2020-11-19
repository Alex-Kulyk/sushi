import React, { useContext, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context } from '../context/CartContext';

const Card = ({ item }) => {
  const { title, subtitle, image, id, price } = item;
  const { addItemCart } = useContext(Context);
  console.log('Card');
  return (
    <TouchableHighlight
      style={{ alignItems: 'center' }}
      underlayColor='#F2F7F7'
      activeOpacity={0.9}
      onPress={() => console.log(id)}
    >
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <Image source={image} style={styles.image} />
        </View>
        <View
          style={{
            flex: 1,
      
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
          <Text numberOfLines={2} style={styles.textFirst}>
            {title}
          </Text>
          <Text numberOfLines={1}>{subtitle}</Text>
          <Text
            style={{
              alignSelf: 'center',
              color: 'red',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            {price}
          </Text>
        </View>
        <View
          style={{
            flex: 0.4,
            justifyContent: 'center',
   
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => addItemCart(item)}
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              width: '90%',
              marginVertical: 12,
            }}
          >
            <Text style={styles.text}>get</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 125 },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  textFirst: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default Card;
