import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/Metrics';

export const CommonButton = ({text, width, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {width}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    elevation: 5,
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.WHITE,
    padding: 8,
    textAlign: 'center',
  },
});
