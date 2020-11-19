import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Cart from '../components/Cart';
import Account from '../components/Account';
import Listing from '../screens/Listing';
import TabBarCartIconAndLable from '../components/TabBarCartIconAndLable';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'green',
      }}
    >
      <Tab.Screen
        name='Menu'
        component={Listing}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-restaurant' size={36} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarCartIconAndLable color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' size={36} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
