import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Searchbar} from 'react-native-paper';
import {Card, Title, Paragraph} from 'react-native-paper';
const ViewJobs = ({navigation}) => {
  //fetch function method

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://agile-tor-14493.herokuapp.com/postjobs')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{marginHorizontal: 20, paddingTop: 20}}>
      <ScrollView>
        {/*         
      <Searchbar
    placeholder="Search"
    onChangeText={onChangeSearch}
    value={searchQuery}
  />
 */}

        <Card style={{backgroundColor: '#ED2525'}}>
          <Card.Content>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  // <Text>{item.jobname},
                  //  {item.companyname},
                  //   {item.location},
                  //    {item.experience},
                  //    {item.duration},
                  //     {item.salary},
                  //     {item.indstry},
                  //     {item.description}
                  //  </Text>
                  <View style={{borderBottomWidth: 2, color: '#fff'}}>
                    <ScrollView>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          JobName :{' '}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {item.jobname}{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          CompanynName :{' '}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          {item.companyname}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          location :
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          {item.location}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          Experience:
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          {item.experience}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          Duration:
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {item.duration}{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          Salary:
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {item.salary}{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          industry :{item.indstry}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          Skills : {item.skills}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          Description : {item.description}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }}>
                          {' '}
                        </Text>
                      </View>
                    </ScrollView>
                  </View>
                )}
              />
            )}
          </Card.Content>
        </Card>

        {/* <Text></Text>
<Card style={{backgroundColor:'#00BCD4'}}>
  <Card.Content>
    <Title>Jobs Views                        </Title>
    <Icon style={{right:-250}} name="eye" size={30} color="#000" />
    <Text style={{ fontSize: 25, color: '#000',left:20}}>02</Text>
  </Card.Content>


</Card>

<Text></Text>
<Card style={{backgroundColor:'#ED2525'}}>
  <Card.Content>
    <Title>Jobs Approved                        </Title>
    <Icon style={{right:-250}} name="check-circle" size={30} color="#000" />
    <Text style={{ fontSize: 25, color: '#000',left:20}}>02</Text>
  </Card.Content>


</Card> */}
      </ScrollView>
    </View>
  );
};

export default ViewJobs;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
});
