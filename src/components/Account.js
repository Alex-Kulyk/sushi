import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const Account = () => {
  const [imageUri, setimageUri] = useState();
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert('You need to eneble permission to access library');

    useEffect(() => {
      let isActive = true;
      if (isActive) requestPermission();
      return () => {
        isActive = false;
      };
    }, []);
  };
  const selectItem = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setimageUri(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title='Select Item' onPress={selectItem} />

      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200, borderRadius: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Account;
