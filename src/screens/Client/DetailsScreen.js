import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,ScrollView,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';
const DetailsScreen = ({navigation}) => {
    return (
      <View style={{marginHorizontal:20,paddingTop:20,}}  >
      <ScrollView>
{/*         
      <Searchbar
    placeholder="Search"
    onChangeText={onChangeSearch}
    value={searchQuery}
  />
 */}


<Card style={{backgroundColor:'#f9aa33',borderRadius:20}}>
<Text style={{ fontSize: 25, color: '#000', alignSelf: 'center',fontWeight:'bold' }}>Posted Jobs</Text>
  <Card.Content>
    
    <Title style={{color:'#000',left:20}}>WebDesign</Title>
    <Icon style={{right:-250}} name="bullhorn" size={30} color="#232f34" />
    <Text style={{ fontSize: 15, color: '#000',left:20}}>$120</Text>
    <Text style={{ fontSize: 15, color: '#000',left:20}}>819008542</Text>
    <Text style={{ fontSize: 15, color: '#000',left:20}}>India</Text>


    <Text></Text>
    <View style={styles.fixToText}>
        

        <Button
          color="#3700b3"
          title="View Job"
          onPress={() =>  navigation.navigate('ViewJobs')}
        />
        <Button
          color="#3700b3"
          title="Edit Post"
          onPress={() =>  navigation.navigate('EditPost')}
        />
      </View>

  </Card.Content>


</Card>
<Text></Text>

<Card style={{backgroundColor:'#ee3823',borderRadius:20,}}>
<Text style={{ fontSize: 25, color: '#fff', alignSelf: 'center',fontWeight:'bold' }}>Jobs Responce</Text>

  <Card.Content>
    <View style={{flexDirection:'row'}}>
<Title style={{color:'#fff',paddingHorizontal:30}}>SANDY</Title>
<Image source={require('../../img/user.jpg')} style={{ width: 50, height: 50, left:100, borderRadius: 75 }} />

    

</View>

    <Text style={{ fontSize: 15, color: '#fff',paddingHorizontal:30}}>$10</Text>
    <Text style={{ fontSize: 15, color: '#fff',paddingHorizontal:30}}>+04102555666</Text>
    <Text style={{ fontSize: 15, color: '#fff',paddingHorizontal:30}}>India</Text>


    <Text></Text>
    <View style={styles.fixToText}>
        

        <Button
          color="#3700b3"
          title="View Profile"
          onPress={() =>  navigation.navigate('ViewProfile')}
        />
        <Button
          color="#3700b3"
          title="Approve"
          onPress={() =>  navigation.navigate('Approve')}
        />
        <Button
          color="#3700b3"
          title="Reject"
          onPress={() =>  navigation.navigate('Reject')}
        />
      </View>

  </Card.Content>


</Card>



</ScrollView>
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