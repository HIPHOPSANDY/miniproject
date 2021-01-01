import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');

const Location = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter Location"
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth: 0,

          borderColor: '#00aa00',
paddingTop:10,
        
          paddingBottom:8,
          
        },
        textInput: {
          marginLeft: 0,
      marginRight: 0,
          width: 60,
          borderWidth: 1,
          height: 55,
            borderColor:'gray',
            
          color: '#000',
          fontSize: 16,
        },
       
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAGTekv1qGoy12QDnfeNGHQlX6SuTTwATI',
        language: 'en',
      }}
    />
  );
};

export default Location;
