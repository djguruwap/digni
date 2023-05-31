/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {COLORS} from '../../Utils/Metrics';

export const onBoarding = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar translucent backgroundColor={COLORS.WHITE} />
      <Onboarding
        onDone={() => navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/images/Image.png')} />,
            title: 'Sed ut perspiciatis undetotam rem aperiam',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/images/Image.png')} />,
            title: 'Sed ut perspiciatis undetotam rem aperiam',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/images/Image.png')} />,
            title: 'Sed ut perspiciatis undetotam rem aperiam',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          },
        ]}
      />
    </>
  );
};
