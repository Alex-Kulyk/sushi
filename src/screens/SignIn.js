import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ActivityIndecator from '../components/ActivityIndecator';
import AppFormField from '../components/FormField';
import Constants from 'expo-constants';
import AppSubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const SignIn = ({ navigation }) => {
  return (
    <>
      {/* <ActivityIndecator visible={true} /> */}
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
          accessible={false}
        >
          <ImageBackground
            style={styles.imageBack}
            source={require('../../assets/start2.png')}
          >
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              {() => (
                <View style={styles.view}>
                  <View>
                    <AppFormField
                      width={'90%'}
                      placeholder='email'
                      name='email'
                      keyboardType='email-address'
                      // onEndEditing={handleSubmit}
                      autoCapitalize='none'
                      autoCorrect={false}
                      icon='email'
                      size={25}
                    />

                    <AppFormField
                      width={'90%'}
                      placeholder='password'
                      name='password'
                      // onEndEditing={handleSubmit}
                      autoCapitalize='none'
                      autoCorrect={false}
                      // textContentType='password'
                      icon='onepassword'
                      size={25}
                    />

                    <AppSubmitButton title='sign in' />
                  </View>
                </View>
              )}
            </Formik>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
  },
  view: {
    top: Constants.statusBarHeight + 150,
    alignItems: 'center',
  },
});
export default SignIn;
