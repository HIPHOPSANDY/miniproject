import React, {Component} from 'react';

import {TextInput, Card} from 'react-native-paper';
import {
  View,
  Picker,
  Colors,
  ScrollView,
  Button,
  Text,
  ImageBackground,
  TextInputBase,
  StyleSheet,
} from 'react-native';

import SwitchSelector from 'react-native-switch-selector';
import Location from '../Component/Location';
import PasswordComponent from '../Component/PasswordComponent';
import FaceBook from '../Component/FaceBook';
import RNB from '../Component/RNB';
import ProfilePhoto from '../Component/ProfilePhoto';



const options = [
  {label: '01:00', value: '1'},
  {label: '01:30', value: '1.5'},
  {label: '02:00', value: '2'},
];

const ProfileClient = (props) => {
  const [Name, setName] = React.useState('');
  const [CompanyName, setCompanyName] = React.useState('');
  const [Position, setPosition] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('Male');

  const [Email, setEmail] = React.useState('');

  const [MobileNumber, setMobileNumber] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Text></Text>
        <ProfilePhoto   />
        <TextInput
          label="Name"
          mode="outlined"
          value={Name}
          style={styles.textbox}
          onChangeText={(Name) => setName(Name)}
        />

        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={Email}
          style={styles.textbox}
          onChangeText={(Email) => setEmail(Email)}
        />

        <TextInput
          label="Mobile Number"
          keyboardType="numeric"
          maxLength={10}
          mode="outlined"
          value={MobileNumber}
          style={styles.textbox}
          onChangeText={(MobileNumber) => setMobileNumber(MobileNumber)}
        />

        <TextInput
          label="Company Name"
          mode="outlined"
          value={CompanyName}
          style={styles.textbox}
          onChangeText={(CompanyName) => setCompanyName(CompanyName)}
        />

        <TextInput
          label="Position"
          mode="outlined"
          value={Position}
          style={styles.textbox}
          onChangeText={(Position) => setPosition(Position)}
        />
        <Text></Text>
        {/* 
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: '#fff',
            borderColor: 'gray',
            overflow: 'hidden',
          }}>
            
          <Picker
            mode="dropdown"
            
            selectedValue={selectedValue}
            style={{height: 55, width: 300,}}
            
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
              
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View> */}
        <RNB />
          

        <Location />
        <Text></Text>
        <View style={{paddingTop: 40, marginHorizontal: 100}}>
          <Button
            color="#00cc00"
            title="NEXT"
            onPress={() => props.navigation.navigate('Post Job')}
          />
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

export default ProfileClient;

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
