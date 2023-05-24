import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  COLORS,
  defaultImg,
  FONT_FAMILY,
  FONT_SIZE,
  SCREEN,
} from '../../Utils/Metrics';
import {AuthContext} from '../AuthProvider';
import {Navlink} from '../../components/Navlink/Navlink';

const IMG_SIZE = 60;

export const CustomDrawer = props => {
  const {logout} = useContext(AuthContext);
  const {navigation} = props;

  const handleLogout = () => {
    Alert.alert('Log out', 'Are u sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => logout()},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Image
            style={styles.imgBox}
            resizeMode="cover"
            source={{uri: defaultImg}}
          />
        </View>
        <View style={{marginLeft: 12}}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text1}>
            Digni Tech
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text2}>
            dignitech@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <DrawerContentScrollView style={styles.scroll} {...props}>
        <Navlink
          showIcon={true}
          title="Networking"
          onPress={() => navigation.navigate('Networking')}
        />
        <Navlink showIcon={true} title="About Us" />
        <Navlink showIcon={true} title="Privacy policy" />
        <Navlink showIcon={true} title="Term & Condition" />

        <Navlink showIcon={true} title="Help & Support" />

        <View style={styles.logout}>
          <Navlink onPress={handleLogout} color="red" title="Logout" />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    alignSelf: 'flex-end',
    marginHorizontal: 16,
    marginTop: 16,
  },
  scroll: {
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  row: {
    height: SCREEN.HEIGHT * 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: COLORS.PRIMARY,
  },
  imgBox: {height: IMG_SIZE, width: IMG_SIZE, borderRadius: IMG_SIZE / 2},
  text1: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.WHITE,
    width: SCREEN.WIDTH / 3,
  },
  text2: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: 'black',
    width: SCREEN.WIDTH / 3,
  },
  line: {
    height: 8,
    width: '100%',
    backgroundColor: '#E7E7E7',
    opacity: 0.6,
  },
  logout: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
