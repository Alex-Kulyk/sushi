import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AppSignupText = ({ children, onPress, ...otherProps }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text {...otherProps}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppSignupText;
