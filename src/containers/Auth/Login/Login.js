import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../../Utils/Metrics';
import {LoginFrom} from './LoginFrom';

const Login = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={'rgba(255, 255, 255,0.1)'} />
      <LinearGradient colors={['#C2E4FF', '#FFFDFD']} style={styles.box} />
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={{color: COLORS.BLACK}}>Hello</Text> Again! {'\n'} Welcome
          Back
        </Text>
        <View style={styles.mt}>
          <LoginFrom />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING.LARGE,
    backgroundColor: COLORS.WHITE,
  },
  box: {
    height: SCREEN.HEIGHT * 0.08,
  },
  title: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.BIG + 8,
    color: COLORS.TEXT_BLUE,
    textAlign: 'center',
    alignSelf: 'center',
  },
  mt: {
    marginTop: SCREEN.WIDTH * 0.1,
  },
});

export default Login;
