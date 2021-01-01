import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import StartScreen from './src/screens/StartScreen';
import LoginUser from './src/screens/LoginUser';
import RegisterUser from './src/screens/RegisterUser';
import ProfileCandidate from './src/screens/ProfileCandidate';
import ProfileClient from './src/screens/Client/ProfileClient';
import PostJob from './src/screens/Client/PostJob';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/screens/Client/MainTabScreen';
import CandidateDashboard from './src/screens/CandidateDashBoard';
import ViewJobs from './src/screens/Client/ViewJobs';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
SplashScreen.hide();
const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen
          name="Dashboard"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={CandidateDashboard}
        />

        <Stack.Screen
          name="ViewJob"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={ViewJobs}
        />
        <Stack.Screen
          name="Post Job"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={PostJob}
        />

        <Stack.Screen
          name="ProfileClient"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={ProfileClient}
        />
        <Stack.Screen
          name="Client DashBoard"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={MainTabScreen}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={LoginUser}
        />

        <Stack.Screen
          name="Register"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={RegisterUser}
        />
        <Stack.Screen
          name="ProfileCandidate"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={ProfileCandidate}
        />

        <Stack.Screen
          name="Create Profile"
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
          component={ProfileClient}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
