import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {avatar, camera} from '../../Utils/Images';
import {PADDING, SCREEN} from '../../Utils/Metrics';
import Icon from '../Icon/Icon';

const SelectImage = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.imageBox}>
      <ImageBackground source={avatar} style={styles.imageBox2}>
        <View style={styles.abs}>
          <View style={styles.center}>
            <Icon source={camera} size={16} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const IMG_SIZE = 85;
const styles = StyleSheet.create({
  imageBox: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: IMG_SIZE / 2,
    alignSelf: 'center',
    marginVertical: PADDING.LARGE,
  },
  imageBox2: {flex: 1, paddingTop: IMG_SIZE + 10},
  abs: {
    height: SCREEN.HEIGHT * 0.055,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: -45,
    borderBottomEndRadius: 75,
    borderBottomStartRadius: 75,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectImage;
