import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectImage from '../../components/SelectImage/SelectImage';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../Utils/Metrics';
import {RegisterFrom} from './RegisterFrom';

const Register = () => {
  return (
    <>
      <LinearGradient colors={['skyblue', 'white']} style={styles.box} />
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={{color: COLORS.BLACK}}>Start</Text> your {'\n'} journey
          with us.
        </Text>
        <View>
          <SelectImage />
        </View>
        <View>
          <RegisterFrom />
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
});

export default Register;
