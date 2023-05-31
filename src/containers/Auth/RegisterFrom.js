/* eslint-disable react-native/no-inline-styles */
import {Formik} from 'formik';
import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {CommonButton} from '../../components/Button/CommonButton';
import {Input} from '../../components/Input/InputBox';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../Utils/Metrics';
import {resgistrationSchema} from './velidate';
import {pin, eye} from '../../Utils/Images';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../Navigation/AuthProvider';

export const RegisterFrom = () => {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();
  const onSubmitHandler = values => {
    console.log('values', values);
  };
  return (
    <Formik
      initialValues={{
        fname: '',
        lname: '',
        companyName: '',
        jobTitle: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        zipCode: '',
        about: '',
        linkedin: '',
        facebook: '',
        instagram: '',
        twiter: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={resgistrationSchema}
      onSubmit={onSubmitHandler}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <View style={styles.row}>
            <View style={{flex: 0.5, paddingRight: PADDING.SMALL}}>
              <Input
                value={values.fname}
                onChange={handleChange('fname')}
                onBlur={() => setFieldTouched('fname')}
                error={errors.fname}
                touched={touched.fname}
                borderColor={COLORS.INPUT_GRAY_BORDER}
                placeholder="Firstname"
              />
            </View>
            <View style={{flex: 0.5, paddingLeft: PADDING.SMALL}}>
              <Input
                value={values.lname}
                onChange={handleChange('lname')}
                onBlur={() => setFieldTouched('lname')}
                error={errors.lname}
                touched={touched.lname}
                borderColor={COLORS.INPUT_GRAY_BORDER}
                placeholder="Lastname"
              />
            </View>
          </View>
          <Input
            value={values.companyName}
            onChange={handleChange('companyName')}
            onBlur={() => setFieldTouched('companyName')}
            error={errors.companyName}
            touched={touched.companyName}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Company name"
          />
          <Input
            value={values.jobTitle}
            onChange={handleChange('jobTitle')}
            onBlur={() => setFieldTouched('jobTitle')}
            error={errors.jobTitle}
            touched={touched.jobTitle}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Job Title"
          />
          <Input
            value={values.address}
            onChange={handleChange('address')}
            onBlur={() => setFieldTouched('address')}
            error={errors.address}
            touched={touched.address}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            icon={pin}
            placeholder="Address"
          />
          <Input
            value={values.zipCode}
            onChange={handleChange('zipCode')}
            onBlur={() => setFieldTouched('zipCode')}
            error={errors.zipCode}
            touched={touched.zipCode}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Zip code"
            keyboardType="numeric"
          />
          <Input
            value={values.about}
            onChange={handleChange('about')}
            onBlur={() => setFieldTouched('about')}
            error={errors.about}
            touched={touched.about}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="About yourself"
            numberOfLine={4}
            multiline={true}
            height={80}
          />
          <Text style={styles.title}>Contact Details</Text>
          <Input
            value={values.phone}
            onChange={handleChange('phone')}
            onBlur={() => setFieldTouched('phone')}
            error={errors.phone}
            touched={touched.phone}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Phone"
          />
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
            value={values.website}
            onChange={handleChange('website')}
            onBlur={() => setFieldTouched('website')}
            error={errors.website}
            touched={touched.website}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Website"
          />
          <Text style={styles.title}>Social Handles</Text>
          <Input
            value={values.linkedin}
            onChange={handleChange('linkedin')}
            onBlur={() => setFieldTouched('linkedin')}
            error={errors.linkedin}
            touched={touched.linkedin}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Linkedin"
          />
          <Input
            value={values.facebook}
            onChange={handleChange('facebook')}
            onBlur={() => setFieldTouched('facebook')}
            error={errors.facebook}
            touched={touched.facebook}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Facebook"
          />
          <Input
            value={values.instagram}
            onChange={handleChange('instagram')}
            onBlur={() => setFieldTouched('instagram')}
            error={errors.instagram}
            touched={touched.instagram}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Instagram"
          />
          <Input
            value={values.twiter}
            onChange={handleChange('twiter')}
            onBlur={() => setFieldTouched('twiter')}
            error={errors.twiter}
            touched={touched.twiter}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Twiter"
          />
          <Text style={styles.title}>Create Password</Text>
          <Input
            value={values.password}
            onChange={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            error={errors.password}
            touched={touched.password}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="New password"
            isSecure={true}
            icon={eye}
          />
          <Input
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={() => setFieldTouched('confirmPassword')}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            borderColor={COLORS.INPUT_GRAY_BORDER}
            isSecure={true}
            placeholder="Confirm password"
            icon={eye}
          />
          <CommonButton
            onPress={() => login({token: 'lknslknlkndsf'})}
            width="100%"
            text="Sign Up"
          />
          <Text style={styles.alreadyHaveAcc}>
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{color: COLORS.PRIMARY}}>
              Sign In
            </Text>
          </Text>
        </ScrollView>
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
    marginTop: PADDING.LARGE,
  },
});
