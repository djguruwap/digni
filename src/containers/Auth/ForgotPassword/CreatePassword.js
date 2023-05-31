import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackButton} from '../../../components/Button/BackButton';
import {CommonButton} from '../../../components/Button/CommonButton';
import {Input} from '../../../components/Input/InputBox';
import {securePwd} from '../../../Utils/Images';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../../Utils/Metrics';

const CreatePassword = () => {
  return (
    <>
      <LinearGradient colors={['#C2E4FF', '#FFFDFD']} style={styles.box} />
      <View style={styles.container}>
        <View>
          <Image style={styles.img} source={securePwd} />
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.title}>Create new password</Text>
          <Text style={styles.subtitle}>
            Your new password cannot be the same as your previous password
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
            placeholder="New password"
          />
          <Input
            value={''}
            // onChange={handleChange('email')}
            // onBlur={() => setFieldTouched('email')}
            // error={errors.email}
            // touched={touched.email}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Confirm Password"
            isSecure={true}
          />
          <CommonButton
            // onPress={() => login({token: 'lknslknlkndsf'})}
            width="100%"
            text="Reset Password"
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

export default CreatePassword;
