import React, { useRef, useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
  Button,
} from 'react-native';

import { Formik } from 'formik';

import { useKeyboard } from '../hooks/useKeyboard';
import * as Yup from 'yup';
import AppFormField from '../components/FormField';
import AppSubmitButton from '../components/SubmitButton';
import AppSignupText from '../components/SignupText';
import ActivityIndicator from '../components/ActivityIndecator';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const SignUp = ({ navigation }) => {
  const [keyboardHeight] = useKeyboard();
  const [flowingStyles, setflowingStyles] = useState(null);
  const animatedView = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      startAnimation();
    }

    if (keyboardHeight > 0)
      setflowingStyles({
        marginBottom: keyboardHeight + 50,
      });
    else
      setflowingStyles({
        marginBottom: 60,
      });
    return () => {
      isActive = false;
    };
  }, [keyboardHeight]);

  const animatedStyles = {
    opacity: animatedView,
  };
  const startAnimation = () => {
    return Animated.timing(animatedView, {
      toValue: 0.7,
      duration: 6000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator visible={true} /> */}
      <ImageBackground
        style={styles.imageBack}
        source={require('../../assets/start_image.png')}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <TouchableWithoutFeedback
                onPress={() => {
                  Keyboard.dismiss();
                }}
                accessible={false}
              >
                <Animated.View
                  style={[styles.view, animatedStyles, flowingStyles]}
                >
                  <AppFormField
                    width={'85%'}
                    placeholder='email'
                    name='email'
                    keyboardType='email-address'
                    // onEndEditing={handleSubmit}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardHeight={keyboardHeight}
                    icon='email'
                    size={25}
                  />

                  <AppFormField
                    width={'85%'}
                    placeholder='password'
                    name='password'
                    // onEndEditing={handleSubmit}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardHeight={keyboardHeight}
                    // textContentType='password'
                    icon='onepassword'
                    size={25}
                  />

                  {keyboardHeight > 0 ? (
                    <AppSubmitButton title='sign up' />
                  ) : (
                    <AppSignupText
                      style={styles.text}
                      onPress={() => navigation.navigate('SignIn')}
                    >
                      Already have account? Go to Sign in
                    </AppSignupText>
                  )}
                </Animated.View>
              </TouchableWithoutFeedback>
            </>
          )}
        </Formik>
      </ImageBackground>
    </View>
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'tomato',
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 17,
  },
});

export default SignUp;
