import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppTextInput = ({
  width = '100%',
  icon,
  size,
  keyboardHeight,

  ...otherProps
}) => {
  // useEffect(() => {}, [keyboardHeight]);

  return (
    <View style={[styles.view, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={size} color='green' />}
      <TextInput
        style={styles.input}
        placeholderTextColor='#98B6A8'
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 35,
    borderRadius: 20,
    // borderColor: 'black',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 7,
    elevation: 20,
    shadowColor: '#0BA05C',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  input: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: 'green',
    // backgroundColor: 'red',
    marginLeft: 7,
    flex: 1,
  },
});

export default AppTextInput;
