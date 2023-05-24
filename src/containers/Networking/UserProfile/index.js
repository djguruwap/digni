/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from '../../../components/Icon/Icon';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  SCREEN,
} from '../../../Utils/Metrics';
import {
  bell,
  backButton,
  locationPin,
  companyIcon,
  phone,
  mail,
  cursor,
} from '../../../Utils/Images';
import {useNavigation} from '@react-navigation/native';
import {JSON} from '../json';
import {AcceptButton} from '../../../components/Button/AcceptButton';
import {RejectButton} from '../../../components/Button/RejectButton';
import {ItemChip} from './Item';
import {UserModal} from './UserModal';

const data = JSON[1];
const UserProfile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Icon
              onPress={() => navigation.goBack()}
              source={backButton}
              size={20}
            />
            <Icon onPress={() => {}} source={bell} size={20} />
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.imageBox}>
            <Image source={{uri: data.img}} style={styles.img} />
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subTitle}>{data.jobTitle}</Text>
        </View>
        <View style={styles.box2}>
          <AcceptButton
            title={'Invite Sent'}
            width={'40%'}
            isActive={false}
            mr={5}
            onPress={() => setModalVisible(true)}
          />
          <RejectButton
            title={'Reject'}
            width={'40%'}
            isActive={false}
            ml={5}
            onPress={() => {}}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.box3}>
          <ItemChip
            icon={companyIcon}
            title="Company"
            subTitle={data.company}
          />
          <ItemChip
            icon={locationPin}
            title="Location"
            subTitle="Akshya Nagar Ist Block Cross, Rammurthy nagar,Bangalore-560016"
          />
          <View>
            <Text style={styles.headerTitle}>About Courtney</Text>
            <Text style={styles.subTitle2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex eg commodo.
            </Text>
          </View>
          <View style={{paddingTop: PADDING.LARGE}}>
            <Text style={styles.headerTitle}>Contact Info</Text>
            <ItemChip
              icon={phone}
              title="Phone Number"
              subTitle="+91 98989 98989"
            />
            <ItemChip
              icon={mail}
              title="Email Address"
              subTitle="courtney.henry@gmail.com"
            />
            <ItemChip
              icon={cursor}
              title="Website"
              subTitle="http://www.domain-name.com/"
            />
          </View>
        </ScrollView>
      </View>
      <UserModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
const IMG_BOX = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  box: {
    backgroundColor: COLORS.PRIMARY,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    height: SCREEN.HEIGHT * 0.2,
  },
  box3: {
    paddingHorizontal: PADDING.LARGE,
    paddingBottom: SCREEN.HEIGHT * 0.1,
  },
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PADDING.LARGE,
    paddingVertical: 20,
  },
  imageBox: {
    height: IMG_BOX,
    width: IMG_BOX,
    borderRadius: IMG_BOX / 2,
    alignSelf: 'center',
    marginTop: -SCREEN.WIDTH * 0.1,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    elevation: 5,
  },
  img: {
    flex: 1,
    borderRadius: IMG_BOX / 2,
  },
  title: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BIG,
    color: COLORS.TARTIARY,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.TARTIARY,
    marginLeft: 5,
    textAlign: 'center',
    marginTop: -5,
  },
  subTitle2: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.MICRO,
    color: COLORS.TEXT_CYAN,
  },
  box2: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: PADDING.LARGE,
  },
  headerTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.TARTIARY,
  },
});
export default UserProfile;
