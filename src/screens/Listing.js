import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Card from '../components/Card';

import Constants from 'expo-constants';

const listForRen = [
  {
    id: 1,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/shushi1.jpg'),
    price: 100,
  },
  {
    id: 2,
    title: 'Shushi Shushi  Shushi Shushi Shushi Shushi Shushi Shushi ',
    subtitle: 'order',
    image: require('../../assets/1.jpg'),
    price: 100,
  },
  {
    id: 3,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi ',
    subtitle: 'order',
    image: require('../../assets/2.jpg'),
    price: 100,
  },
  {
    id: 4,
    title: 'Shushi Shushi Shushi Shushi Shushi ',
    subtitle: 'order',
    image: require('../../assets/3.jpg'),
    price: 100,
  },
  {
    id: 5,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi ',
    subtitle: 'order',
    image: require('../../assets/4.jpg'),
    price: 100,
  },
  {
    id: 6,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/5.jpg'),
    price: 100,
  },
  {
    id: 7,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi ',
    subtitle: 'order',
    image: require('../../assets/6.jpg'),
    price: 100,
  },
  {
    id: 8,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/7.jpg'),
    price: 100,
  },
  {
    id: 9,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/8.jpg'),
    price: 100,
  },
  {
    id: 10,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/9.jpg'),
    price: 100,
  },
  {
    id: 11,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/10.jpg'),
    price: 100,
  },
  {
    id: 12,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order',
    image: require('../../assets/11.jpg'),
    price: 100,
  },
  {
    id: 13,
    title: 'Shushi Shushi Shushi Shushi  Shushi Shushi Shushi Shushi  Shushi',
    subtitle: 'order',
    image: require('../../assets/12.jpg'),
    price: 100,
  },
  {
    id: 14,
    title: 'Shushi Shushi Shushi Shushi Shushi ',
    subtitle: 'order',
    image: require('../../assets/13.jpg'),
    price: 100,
  },
  {
    id: 15,
    title: 'Shushi1 Shushi Shushi Shushi Shushi',
    subtitle: 'order1',
    image: require('../../assets/14.jpg'),
    price: 100,
  },
  {
    id: 16,
    title: 'Shushi Shushi Shushi Shushi Shushi Shushi',
    subtitle: 'order2',
    image: require('../../assets/15.jpg'),
    price: 100,
  },
];

const Listing = (props) => {
  console.log('Listing');
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ padding: 10 }}>
        <FlatList
          style={styles.flat}
          keyExtractor={(item) => item.id.toString()}
          data={listForRen}
          renderItem={({ item }) => <Card item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F7F7',
  },
  flat: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
export default Listing;
