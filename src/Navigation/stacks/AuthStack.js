import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../../containers/Auth/Register';
import {SplashScreen} from '../../containers/Splash/Splash';
import Login from '../../containers/Auth/Login/Login';
import { onBoarding } from '../../containers/OnBoarding/onBoarding';
import ForgotPassword from '../../containers/Auth/ForgotPassword/ForgotPassword';
import CreatePassword from '../../containers/Auth/ForgotPassword/CreatePassword';

const Stack = createStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreatePassword"
        component={CreatePassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OnBoarding"
        component={onBoarding}
      />
    </Stack.Navigator>
  );
};
