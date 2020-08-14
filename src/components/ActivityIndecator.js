import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const ActivityIndecator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require('../../assets/animation/loader2.json')}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ActivityIndecator;
