import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <Card style={{margin:30, backgroundColor:'#00BCD4'}}>
    <View style={styles.container}>
      
    
      <Image source={require('../img/user.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 75 }} />
      <Text style={{ fontSize: 25, color: '#000', alignSelf: 'center',fontWeight:'bold' }}>SANDY</Text>
     
      
       
        
<View style={{flexDirection:'row',paddingTop:20}}>
 
        <Icon style={{right:20}} name="envelope" size={20} color="#fff" />
        <Text style={{ fontSize: 15, color: '#000',left:10}}>santhoskumar24cs@gmail.com</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:20}}>
        <Icon style={{right:82}} name="phone-square" size={25} color="#fff" />
        <Text style={{ fontSize: 15, color: '#000',left:-55}}>8190085191</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:20}}>
        <Icon style={{right:82}} name="briefcase" size={20} color="#FFf" />
        <Text style={{ fontSize: 15, color: '#000',left:-55}}>CORALMINT</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:20}}>
        <Icon style={{right:88}} name="map-marker" size={25} color="#FFF" />
        <Text style={{ fontSize: 15, color: '#000',left:-55}}>Cuddalore</Text>
        </View>
        
      <Text> </Text>

      
      </View>
      <View style={styles.fixToText}>
      <Button
      color="#3700b3"
            title="Edit profile"
            onPress={() =>  navigation.navigate("EditProfileScreen")}
        />

        {/* <Button
          color="#00cc00"
          title="          LOGIN          "
          onPress={() =>  navigation.navigate('' , {
            ProfileClient: 'ProfileClient',
            initial: false,
          })}
        /> */}
      </View>
      </Card>
      
     
   
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,

    alignItems: 'center',
    justifyContent: 'center'
  },
  fixToText: {
    paddingHorizontal:20,
    paddingBottom:10,
    flexDirection: 'row',
    
    justifyContent: 'center',
  },
});