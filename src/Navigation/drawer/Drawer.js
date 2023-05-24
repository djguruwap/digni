/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../containers/Dashboard/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from './CustomSidebar';
import Networking from '../../containers/Networking/Networking';
import UserProfile from '../../containers/Networking/UserProfile';

//Drawer
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerType="back"
      drawerPosition="left"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export const MainDrawer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={DrawerComponent}
      />
      <Stack.Screen name="Networking" component={Networking} />
      <Stack.Screen
        options={{headerShown: false}}
        name="UserProfile"
        component={UserProfile}
      />
    </Stack.Navigator>
  );
};
