import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider as CartContext } from './src/context/CartContext';

BottomTabNavigator;

export default function App() {
  return (
    <CartContext>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CartContext>
  );
}
