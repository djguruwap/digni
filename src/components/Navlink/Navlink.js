import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/Metrics';

export const Navlink = ({title, onPress, color}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={[styles.text, {color: color ? color : COLORS.BLACK}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
    paddingVertical: 2,
  },
});
