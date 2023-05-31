/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/Metrics';
import LinearGradient from 'react-native-linear-gradient';

export const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.replace('Login');
      navigation.replace('OnBoarding');
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={['#3AA7FD', '#9BD3FF', '#3AA7FD']}
        style={styles.container}>
        <Text style={styles.title}>Icebreakerz</Text>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  box: {
    alignItems: 'center',
    marginTop: 90,
  },
  title: {
    fontSize: FONT_SIZE.BIG + 20,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    textAlign: 'center',
  },
});
