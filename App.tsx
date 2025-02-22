import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../canvasapp/android/app/src/components/Mainpage';
import { VpnPage, FirstPage, SecondPage } from '../canvasapp/android/app/src/components/Vpnpage';
import VpnLoginPage from '../canvasapp/android/app/src/components/VpnLoginpage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="VpnPage" component={VpnPage} options={{ headerShown: false }} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }} />
        <Stack.Screen name="VpnLoginPage" component={VpnLoginPage} options={{ title: 'Login' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
