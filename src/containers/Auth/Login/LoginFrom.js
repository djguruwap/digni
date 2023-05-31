import {Formik} from 'formik';
import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Input} from '../../../components/Input/InputBox';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../../Utils/Metrics';
import {pin, eye, google, linkedin, apple} from '../../../Utils/Images';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../Navigation/AuthProvider';
import {CommonButton} from '../../../components/Button/CommonButton';
import Icon from '../../../components/Icon/Icon';
// import { resgistrationSchema } from '../velidate';

export const LoginFrom = () => {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();
  const onSubmitHandler = values => {
    console.log('values', values);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      // validationSchema={resgistrationSchema}
      onSubmit={onSubmitHandler}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <Input
            value={values.email}
            onChange={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            error={errors.email}
            touched={touched.email}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Email"
          />
          <Input
            value={values.password}
            onChange={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            error={errors.password}
            touched={touched.password}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Password"
            isSecure={true}
            icon={eye}
          />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPwd}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <CommonButton
            onPress={() => login({token: 'lknslknlkndsf'})}
            width="100%"
            text="Sign In"
          />
          <View>
            <Text style={styles.continueWith}>Continue With</Text>
            <View style={[styles.row, styles.socialLinks]}>
              <Icon size={18} onPress={() => {}} source={linkedin} />
              <Icon size={18} onPress={() => {}} source={apple} />
              <Icon size={18} onPress={() => {}} source={google} />
            </View>
          </View>
          <Text style={styles.alreadyHaveAcc}>
            Don’t have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{color: COLORS.PRIMARY}}>
              Sign up
            </Text>
          </Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: SCREEN.HEIGHT * 0.4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.BLACK,
  },
  alreadyHaveAcc: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
    textAlign: 'center',
    alignSelf: 'center',
  },
  forgotPwd: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.PRIMARY,
    alignSelf: 'flex-end',
    paddingVertical: PADDING.MEDIUM,
  },
  continueWith: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.PRIMARY,
    alignSelf: 'center',
    paddingVertical: PADDING.SMALL,
    marginTop: 20,
  },
  socialLinks: {
    width: '45%',
    alignSelf: 'center',
    paddingVertical: PADDING.LARGE + PADDING.SMALL,
  },
});
