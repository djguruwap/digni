/* eslint-disable react-hooks/exhaustive-deps */

import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './AuthProvider';
import {AuthStack} from './stacks/AuthStack';
import {MainDrawer} from './drawer/Drawer';

export const Routes = () => {
  const {login, user} = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem('@auth').then(auth => {
      if (auth) {
        login(JSON.parse(auth));
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {user ? <MainDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
