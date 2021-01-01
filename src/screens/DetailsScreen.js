import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,ScrollView,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';
const DetailsScreen = ({navigation}) => {
    return (
      <View style={{marginHorizontal:20,paddingTop:20,}}  >
      <Text>Apply Jobs</Text>
    </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center', 
    justifyContent: 'center'
  },
  fixToText: {
   
    flexDirection: 'row',
    
    justifyContent: 'space-evenly',
  },
});