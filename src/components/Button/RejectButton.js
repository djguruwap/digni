import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, PADDING} from '../../Utils/Metrics';

export const RejectButton = ({title, width, onPress, isActive, mr, ml}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width,
          backgroundColor: isActive ? COLORS.TARTIARY : COLORS.CARD_CYAN,
          marginLeft: ml,
          marginRight: mr,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {color: isActive ? COLORS.WHITE : COLORS.TARTIARY},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.CARD_CYAN,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.TARTIARY,
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.PRIMARY,
    padding: PADDING.SMALL,
    textAlign: 'center',
  },
});
