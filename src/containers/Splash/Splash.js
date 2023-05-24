/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/Metrics';

export const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Register');
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <Text style={styles.title}>Digni</Text>
      </View>
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
