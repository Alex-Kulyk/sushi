import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import ImageInput from './ImageInput';

const Account = () => {
  console.log('account');
  const [imageUri, setimageUri] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
        Profile
      </Text>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setimageUri(uri)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F7',
    paddingTop: Constants.statusBarHeight,
  },
});

export default Account;
