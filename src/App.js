/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import InfoScreen from './screens/InfoScreen';
import {fontConfig} from './assets/fontConfig';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: 'Indicadores',
              }}
            />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen
              name="InfoScreen"
              options={{
                presentation: 'formSheet',
                title: 'Information',
              }}
              component={InfoScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
