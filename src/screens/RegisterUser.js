import React from "react";

import { TextInput, Card } from 'react-native-paper';
import {
  View,
  Picker,
  Colors,
  ScrollView,
  Button,
  Text,
  ImageBackground,
  TextInputBase,
  StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { Form } from 'native-base';

import SwitchSelector from 'react-native-switch-selector';
import Location from './Component/Location';
import PasswordComponent from './Component/PasswordComponent';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import FaceBook from './Component/FaceBook';
// import axios from 'axios';


// const options = [
//   { label: '01:00', value: '1' },
//   { label: '01:30', value: '1.5' },
//   { label: '02:00', value: '2' },
// ];

const RegisterUser = ({ navigation }) => {
  const [FullName, setFullName] = React.useState('');
  const [LastName, setLastName] = React.useState('');

  const [Email, setEmail] = React.useState('');
  const [MobileNumber, setMobileNumber] = React.useState('');
  const [Password, setPassword] = React.useState('');


  const [location, setlocation] = React.useState('');

  const [CustomerType, setCustomerType] = React.useState('');
  // navigator.geolocation = require('@react-native-community/geolocation');

  const [hidePassword, switchPassword] = React.useState(true);

  const setPasswordVisibility = () => {
    switchPassword(!hidePassword);

  };

  // handlesubmit
  // const handleSubmit = async (evt) => {
  //   //POST json
  //   var dataToSend = {
  //     firstname: FullName,
  //     email: Email,
  //     mobilenumber: MobileNumber,
  //     location: location,
  //     lastname: LastName,
  //     password: Password,
  //     customertype: CustomerType,
  //     // id: '12345',
  //   };

  //   //making data to send on server
  //   var formBody = [];
  //   for (var key in dataToSend) {
  //     var encodedKey = encodeURIComponent(key);
  //     var encodedValue = encodeURIComponent(dataToSend[key]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }

  //   formBody = formBody.join('&');
  //   let response = await fetch(
  //     'https://vast-brushlands-60667.herokuapp.com/signup',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/raw; charset=UTF-8',
  //       },
  //       body: formBody,
  //     },
  //   );

  //   let json = await response.json();
  //   console.log('POST completed');
  //   console.log(json);

  //   //  navigation.replace('Login');
  //   navigation.navigate('ProfileCandidate');
  // };

  // axios
  // const postDataUsingSimplePostCall = () => {
  //   axios
  //     .post('https://vast-brushlands-60667.herokuapp.com/signup', {
  //       firstname: FullName,
  //            email: Email,
  //            mobilenumber: MobileNumber,
  //            location: location,
  //            lastname: LastName,
  //            password: Password,
  //            customertype: CustomerType,
  //     })
  //     .then(function(response) {
  //       console.log("post working");
  //       // handle success
  //       alert(JSON.stringify(response.data));
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       alert(error.message);
  //     });
  // };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,

      }}>
      <ScrollView keyboardShouldPersistTaps="always" >

        <Form  >

          {/* <TouchableOpacity  onPress={handleSubmit}  > */}

          <Text></Text>
          <SwitchSelector


            onPress={(CustomerType) => setCustomerType(CustomerType)}
            options={[

              { label: 'Candidate', value: 'candidate' }, //images.feminino = require('./path_to/assets/img/feminino.png')
              { label: 'Client', value: 'client' }, //images.masculino = require('./path_to/assets/img/masculino.png')

            ]}
          />
          {/* <FaceBook /> */}

          {/* <TextInput
          label="CustomerType"
          mode="outlined"
          value={CustomerType}
          style={styles.textbox}
          onChangeText={(CustomerType) => setCustomerType(CustomerType)}
        /> */}


          <TextInput
            label="First Name"
            mode="outlined"
            value={FullName}
            style={styles.textbox}
            onChangeText={(FullName) => setFullName(FullName)}
          />

          <TextInput
            label="Last Name"
            mode="outlined"
            value={LastName}
            style={styles.textbox}
            onChangeText={(LastName) => setLastName(LastName)}
          />

          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            value={Email}
            style={styles.textbox}
            onChangeText={(Email) => setEmail(Email)}
          />

          {/* <PasswordComponent    /> */}

          <View style={{ paddingTop: 10 }}>
            <View style={{
              position: 'relative',
              alignSelf: 'stretch',
              justifyContent: 'center',
            }} >
              <TextInput
                secureTextEntry={hidePassword}
                label="Password"
                mode="outlined"

                style={{
                  backgroundColor: '#fff',

                  fontSize: 15,
                  alignSelf: 'stretch',

                  borderColor: '#000',
                }}
                onChangeText={(Password) => setPassword(Password)}

              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  position: 'absolute',
                  right: 3,
                  height: 40,
                  width: 35,
                  padding: 2,
                }}

                onPress={(e) => setPasswordVisibility(e)}>
                <Image
                  source={
                    hidePassword
                      ? require('../img/1446378-200.png')
                      : require('../img/show_hide_password-07-512.webp')
                  }
                  style={{
                    resizeMode: 'contain',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* 
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            value={Password}
            style={{ backgroundColor: '#fff', paddingTop: 10 }}
            onChangeText={(Password) => setPassword(Password)}

          /> */}


          <TextInput
            label="Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            mode="outlined"
            value={MobileNumber}
            style={styles.textbox}
            onChangeText={(MobileNumber) => setMobileNumber(MobileNumber)}
          />

          {/* <Location value={location} onChangeText={(location) => setlocation(location)} /> */}

          <TextInput

            label="location"
            mode="outlined"
            value={location}
            style={styles.textbox}
            value={location} onChangeText={(location) => setlocation(location)}


          />
          {/* LOCATION */}
          {/* 
          <GooglePlacesAutocomplete
           placeholder='Enter Location'
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
                paddingTop: 10,

                paddingBottom: 8,

              },
              textInput: { 
                
                marginLeft: 0,
                marginRight: 0,
                width: 60,
                borderWidth: 1,
                height: 55,
                borderColor: 'gray',
                color: '#000',
                fontSize: 16
              },

            }}
            value={location} 
        // onChangeText={(location) => setlocation(location)} 
            onPress={(data, location, details = null) => {
              // 'details' is provided when fetchDetails = true
              setlocation(location);
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyAGTekv1qGoy12QDnfeNGHQlX6SuTTwATI',
              language: 'en',
            }}
          /> */}


          {/* <TextInput
      label="Lcation"
      mode="outlined"
      
      value={Location} style={{backgroundColor:'#fff',paddingTop:10}}
      onChangeText={Location => setLocation(Location)}
    /> */}
          {/* <View style={{borderRadius: 5, borderWidth: 1,backgroundColor:'#fff', borderColor: 'gray', overflow: 'hidden'}} >
    <Picker mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 55, width: 300 ,}}
        
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker></View> */}
          {/* <TextInput
      label="Customer Type"
      mode="outlined"
      
      value={CustomerType} style={{backgroundColor:'#fff',paddingTop:10}}
      onChangeText={CustomerType => setCustomerType(CustomerType)}
    /> */}

          <View style={{ paddingTop: 40, marginHorizontal: 100 }}>
            <Button
              color="#00cc00"
              title="REGISTER"
              // onPress={(handleSubmit)}
              onPress={() =>  navigation.navigate('ProfileCandidate')}
            />

          </View>
          <Text></Text>
        </Form>
        {/* </TouchableOpacity> */}


      </ScrollView>
    </View>
  );
}

export default RegisterUser;

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
