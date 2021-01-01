import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EditProfileScreen from './EditProfileScreen';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from '../ProfileScreen';
import PostJob from './PostJob';
import ViewJobs from './ViewJobs';
import EditPost from './EditPost';
import ViewProfile from './ViewProfile';
import Approve from './Approve';
import Reject from './Reject';
import LoginUser from '../LoginUser';

const Stack = createStackNavigator();





const HomeStack = createStackNavigator();


const DetailsStack = createStackNavigator();

const ProfileStack= createStackNavigator();
const EditProfileStack= createStackNavigator();

const Tab = createMaterialBottomTabNavigator();




const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"

    >

        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarColor: '#00aa00',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Details"

            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Job Post',
                tabBarColor: '#00aa00',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#00aa00',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
        {/* <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#181818',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="compass" color={color} size={26} />
                ),
            }}
        /> */}
    </Tab.Navigator>
)
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#ffffff',

            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <HomeStack.Screen
            name="Home"

            component={HomeScreen}
            options={{
                title: 'Dashboard',

                headerLeft: () => (
                    <Icon.Button backgroundColor="gray" onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} backgroundColor="#8956ff" color="#fff" />

                    </Icon.Button>

                ),
            }}
        />
         <Stack.Screen name="Post Job" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={PostJob} />
            <Stack.Screen name="ViewJobs" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={ViewJobs} />
            <Stack.Screen name="EditPost" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={EditPost} />
            <Stack.Screen name="ViewProfile" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={ViewProfile} />
            <Stack.Screen name="Approve" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={Approve} />
            <Stack.Screen name="Reject" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={Reject} />
             <Stack.Screen name="LoginUser" 
      
      
      options={{
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: 'gray',
              },
            }}  component={LoginUser} />
    </HomeStack.Navigator>
);




const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator

        screenOptions={{


            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#ffffff',

            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <DetailsStack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
                title: 'Post Job',
                headerLeft: () => (
                    <Icon.Button backgroundColor="gray" onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} backgroundColor="#8956ff" color="#fff" />

                    </Icon.Button>

                ),
            }}

        />
    </DetailsStack.Navigator>
);


const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator

        screenOptions={{


            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#ffffff',

            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <ProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                title: 'Profile',
                headerLeft: () => (
                    <Icon.Button backgroundColor="gray" onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} backgroundColor="#8956ff" color="#fff" />

                    </Icon.Button>

                ),
            }}

        />
    </ProfileStack.Navigator>
);


const EditProfileStackScreen = ({ navigation }) => (
    <EditProfileStack.Navigator

        screenOptions={{


            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#ffffff',

            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <EditProfileStack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                title: 'Profile',
                headerLeft: () => (
                    <Icon.Button backgroundColor="gray" onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} backgroundColor="#8956ff" color="#fff" />

                    </Icon.Button>

                ),
            }}

        />
    </EditProfileStack.Navigator>
);

export default MainTabScreen;