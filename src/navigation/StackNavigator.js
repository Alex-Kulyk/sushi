import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // mode='modal'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Sign Up'
        component={SignUp}
        options={{ gestureDirection: 'vertical' }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={() => ({
          title: false,
          headerTintColor: 'white',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgb(13,14,16)',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: 200,
          },
          gestureDirection: 'horizontal',
        })}
      />
      <Stack.Screen name='Listing' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
