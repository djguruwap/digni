import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Input} from '../../../components/Input/InputBox';
import {COLORS, PADDING, SCREEN} from '../../../Utils/Metrics';
import {JSON} from '../json';
import {InviteCard} from './InviteCard';
import {searchPin, filterIcon, sortIcon} from '../../../Utils/Images';
import Icon from '../../../components/Icon/Icon';
import {useNavigation} from '@react-navigation/native';

const InviteRequest = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <InviteCard
        onPress={() => navigation.navigate('UserProfile')}
        data={item}
      />
    );
  };
  return (
    <>
      <View style={styles.row}>
        <Icon onPress={() => {}} source={sortIcon} size={22} />
        <View style={{width: '80%'}}>
          <Input
            borderColor={COLORS.INPUT_GRAY_BORDER}
            placeholder="Search"
            icon={searchPin}
          />
        </View>
        <Icon onPress={() => {}} source={filterIcon} size={22} />
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={JSON}
        renderItem={renderItem}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.MEDIUM,
    paddingBottom: SCREEN.HEIGHT * 0.2,
    backgroundColor: COLORS.WHITE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING.MEDIUM,
    backgroundColor: COLORS.WHITE,
  },
});
export default InviteRequest;
