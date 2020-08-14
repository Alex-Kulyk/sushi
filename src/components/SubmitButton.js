import React from 'react';
import AppButton from './Button';
import { useFormikContext } from 'formik';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppSubmitButton = ({ title, width, ...otherProps }) => {
  const navigation = useNavigation();
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      width={width}
      onPress={() => {
        handleSubmit();
        navigation.navigate('Listing');
      }}
    />
  );
};

export default AppSubmitButton;
