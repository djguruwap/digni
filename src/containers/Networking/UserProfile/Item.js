import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '../../../components/Icon/Icon';
import {COLORS, FONT_FAMILY, FONT_SIZE, PADDING} from '../../../Utils/Metrics';

export const ItemChip = ({title, subTitle, icon}) => {
  return (
    <View style={styles.item}>
      <View style={styles.imgBox}>
        <View style={styles.innerBox}>
          <Icon source={icon} size={18} />
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const IMG_SIZE = 50;
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: PADDING.MEDIUM,
  },
  innerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    paddingLeft: PADDING.MEDIUM,
  },
  imgBox: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: 8,
    backgroundColor: COLORS.CARD_CYAN_DEEP,
  },
  title: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  subTitle: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.MICRO,
    color: COLORS.TEXT_CYAN,
    marginTop: -3,
  },
});
