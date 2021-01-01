import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';



const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const { colors } = useTheme();

  const theme = useTheme();
  
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
  <Card style={{backgroundColor:'#FFC107',borderRadius:20}}>
    <Card.Content>
      <Title>Jobs Posted                        </Title>
      <Icon style={{right:-250}} name="bullhorn" size={30} color="#000" />
      <Text style={{ fontSize: 25, color: '#000',left:20}}>02</Text>
    </Card.Content>
 
  
  </Card>




  <Text></Text>
  <Card style={{backgroundColor:'#00BCD4',borderRadius:20}}>
    <Card.Content>
      <Title>Jobs Viewed                        </Title>
      <Icon style={{right:-250}} name="eye" size={30} color="#000" />
      <Text style={{ fontSize: 25, color: '#000',left:20}}>02</Text>
    </Card.Content>
 
  
  </Card>

  <Text></Text>
  <Card style={{backgroundColor:'#ED2525',borderRadius:20}}>
    <Card.Content>
      <Title>Jobs Approved                        </Title>
      <Icon style={{right:-250}} name="check-circle" size={30} color="#000" />
      <Text style={{ fontSize: 25, color: '#000',left:20}}>02</Text>
    </Card.Content>
 
  
  </Card>
  </ScrollView>
      </View>
      
    
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'space-evenly'
  },
});