import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AppButton = ({ width = '100%', title, style, styleText, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={[styles.view]}>
        <Text style={[styles.text, styleText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    marginVertical: 10,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default AppButton;
