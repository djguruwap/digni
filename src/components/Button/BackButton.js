import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {backButton2} from '../../Utils/Images';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/Metrics';
import Icon from '../Icon/Icon';

export const BackButton = ({width, onPress, ml}) => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {width, marginLeft: ml}]}>
      <Icon size={14} source={backButton2} onPress={goBack} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '40%',
    backgroundColor: COLORS.WHITE,
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.WHITE,
    padding: 8,
    textAlign: 'center',
  },
});
