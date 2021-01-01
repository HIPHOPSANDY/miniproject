import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Searchbar} from 'react-native-paper';
import {Card, Title, Paragraph} from 'react-native-paper';
import Carousel from './Component/Carousel';
import Swiper from 'react-native-web-swiper';

import Search from './Search';

const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const {colors} = useTheme();
  const theme = useTheme();

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
    <View style={{marginTop: 20}}>
      <ScrollView>
        <Search />
        <Carousel />
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

              <View>
                <ScrollView>
                  <Card
                    style={{
                      borderWidth: 1,
                      margin: 10,
                      borderColor: 'gray',
                    }}>
                    {/* <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, color: '#000', left: 20, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'flex-start' }}>Recommend Jobs</Text>
            <Text style={{ fontSize: 15, color: '#00a', left: 150, alignSelf: 'flex-end', }}>View All</Text>



          </View> */}

                    <Card
                      style={{
                        borderWidth: 1,
                        margin: 10,
                        borderColor: 'gray',
                      }}>
                      <View style={{margin: 10}}>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#000',
                            paddingHorizontal: 20,
                            alignSelf: 'flex-start',
                            justifyContent: 'flex-start',
                          }}>
                          {item.jobname}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#00a',
                            paddingHorizontal: 20,
                            alignSelf: 'flex-start',
                            justifyContent: 'flex-start',
                          }}>
                          {item.companyname}
                        </Text>

                        <View style={styles.lineStyle} />

                        <View style={{flexDirection: 'row', paddingTop: 20}}>
                          <Icon
                            style={{left: 20}}
                            name="map-marker"
                            size={18}
                            color="#000"
                          />
                          <Text
                            style={{
                              fontSize: 17,
                              color: '#000',
                              left: 35,
                              bottom: 5,
                            }}>
                            {item.location}
                          </Text>
                        </View>

                        <View style={{flexDirection: 'row', paddingTop: 20}}>
                          <Icon
                            style={{left: 20}}
                            name="envelope"
                            size={15}
                            color="#000"
                          />
                          <Text
                            style={{
                              fontSize: 17,
                              color: '#000',
                              left: 30,
                              bottom: 5,
                            }}>
                            {item.experience}
                          </Text>
                        </View>

                        <View style={{flexDirection: 'row', paddingTop: 20}}>
                          <Icon
                            style={{left: 20}}
                            name="money"
                            size={15}
                            color="#000"
                          />
                          <Text
                            style={{
                              fontSize: 17,
                              color: '#000',
                              left: 30,
                              bottom: 5,
                            }}
                            numberOfLines={1}>
                            {item.salary}
                          </Text>
                        </View>

                        <Button
                          color="#370"
                          title="View Job"
                          onPress={() => navigation.navigate('ViewJob')}
                        />
                      </View>
                    </Card>
                  </Card>
                </ScrollView>
              </View>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 10,
  },
});
