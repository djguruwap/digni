import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const Icon = ({onPress, source, size = 14}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Image
        source={source}
        style={[styles.icon, {height: size, width: size}]}
      />
    </TouchableOpacity>
  );
};

export default Icon;
const styles = StyleSheet.create({
  icon: {
    height: 12,
    width: 12,
  },
});
