import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackButton} from '../../../components/Button/BackButton';
import {CommonButton} from '../../../components/Button/CommonButton';
import {Input} from '../../../components/Input/InputBox';
import {mailBox} from '../../../Utils/Images';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../../Utils/Metrics';

const ForgotPassword = () => {
	const {navigate} = useNavigation()
  return (
    <>
      <LinearGradient colors={['#C2E4FF', '#FFFDFD']} style={styles.box} />
      <BackButton ml={16} />
      <View style={styles.container}>
        <View>
          <Image style={styles.img} source={mailBox} />
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.title}>Forgot your password?</Text>
          <Text style={styles.subtitle}>
            Enter your email address to receive a password reset instructions
          </Text>
        </View>
        <View>
          <Input
            value={''}
            // onChange={handleChange('email')}
            // onBlur={() => setFieldTouched('email')}
            // error={errors.email}
            // touched={touched.email}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Email"
          />
          <CommonButton
            onPress={() => navigate('CreatePassword')}
            width="100%"
            text="Continue"
          />
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
    paddingTop: SCREEN.HEIGHT * 0.1,
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
  subtitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    textAlign: 'center',
    alignSelf: 'center',
  },
  img: {
    height: SCREEN.HEIGHT * 0.18,
    alignSelf: 'center',
  },
});

export default ForgotPassword;
