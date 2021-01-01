import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  SafeAreaView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';

const Stack = createStackNavigator();

function StartScreen(props) {
  return (
    <View style={{flex:1 , backgroundColor:'#000000'}}   >
      
      <ImageBackground  style={{width:700,height:900,flex: 1,}} imageStyle= 
            {{opacity:0.5}} 
      source={require('../img/user.jpg')}
      />
      <Image  source={require('../img/final1.png')} style={{width:100,height:100,alignSelf:'center'}} /> 

         <Text  style={{fontSize:40,color:'#fff',alignSelf:'center'}}>JOB PORTAL</Text>
      <View style={styles.fixToText}>
        <Button
          color="blue"
          title="      REGISTER      "
          onPress={() =>  props.navigation.navigate('Register')}
        />

        <Button
          color="#00cc00"
          title="          LOGIN          "
          onPress={() =>  props.navigation.navigate('Login')}
        />
        
      </View>
      
    </View>
  );
}

export default StartScreen;
const styles = StyleSheet.create({
  fixToText: {
    paddingHorizontal:20,
    paddingBottom:200,
    flexDirection: 'row',
    
    justifyContent: 'space-between',
  },
});
