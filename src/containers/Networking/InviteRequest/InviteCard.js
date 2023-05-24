import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from '../../../components/Icon/Icon';
import {COLORS, FONT_FAMILY, FONT_SIZE, PADDING} from '../../../Utils/Metrics';
import {suitcase, companyIcon} from '../../../Utils/Images';
import {AcceptButton} from '../../../components/Button/AcceptButton';
import {RejectButton} from '../../../components/Button/RejectButton';

export const InviteCard = props => {
  const {img, title, jobTitle, about, company} = props.data;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={styles.card}>
      <View style={styles.row}>
        <View style={styles.rowItem1}>
          <Image source={{uri: img}} style={styles.img} />
        </View>
        <View style={styles.rowItem2}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.row}>
            <Icon source={suitcase} size={16} />
            <Text style={styles.subTitle}>{jobTitle}</Text>
          </View>
          <View style={styles.row}>
            <Icon source={companyIcon} size={16} />
            <Text style={styles.subTitle}>{company}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.about}>{about}</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <AcceptButton
          title={'Accept'}
          width={'49%'}
          isActive={false}
          onPress={() => {}}
        />
        <RejectButton
          title={'Reject'}
          width={'49%'}
          isActive={false}
          onPress={() => {}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: COLORS.CARD_CYAN,
    borderRadius: 8,
    marginTop: 10,
    padding: PADDING.MEDIUM,
  },
  img: {
    flex: 1,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItem1: {
    height: 80,
    width: 80,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  rowItem2: {
    marginLeft: PADDING.MEDIUM,
  },
  title: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.TARTIARY,
  },
  subTitle: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.TARTIARY,
    marginLeft: 5,
  },
  about: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MICRO,
    color: COLORS.TARTIARY,
    paddingVertical: PADDING.SMALL,
  },
});
