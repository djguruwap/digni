import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONT_FAMILY} from '../../Utils/Metrics';
import InviteRequest from './InviteRequest';
import InviteSent from './InviteSent';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.TARTIARY,
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.MEDIUM,
          textTransform: 'capitalize',
        },
      }}>
      <Tab.Screen
        options={{title: 'Invite Request'}}
        name="InviteRequest"
        component={InviteRequest}
      />
      <Tab.Screen
        name="InviteSent"
        options={{title: 'Invite Sent'}}
        component={InviteSent}
      />
    </Tab.Navigator>
  );
}

const Networking = () => {
  return (
    <>
      <MyTabs />
    </>
  );
};
export default Networking;
