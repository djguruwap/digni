import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../../containers/Auth/Register';
import {SplashScreen} from '../../containers/Splash/Splash';

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
    </Stack.Navigator>
  );
};
