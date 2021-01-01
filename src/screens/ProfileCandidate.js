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
import Location from './Component/Location';
import PasswordComponent from './Component/PasswordComponent';
import FaceBook from './Component/FaceBook';
import RNB from './Component/RNB';
import ProfilePhoto from './Component/ProfilePhoto';
import Dob from './Component/Dob';
import SearchInput from './Component/SearchInput';
import MultiSelect from './Component/MultiSelect';
import FileUpload from './Component/FileUpload';
import MultiSelectJob from './Component/MulitiSelectJob';
import {RadioButton} from 'react-native-paper';


const options = [
  {label: '01:00', value: '1'},
  {label: '01:30', value: '1.5'},
  {label: '02:00', value: '2'},
];

const ProfileCandidate = ({navigation}) => {
  const [Name, setName] = React.useState('');
  const [CompanyName, setCompanyName] = React.useState('');
  const [Position, setPosition] = React.useState('');
  const [specialization, setspecialization] = React.useState('');
  const [quelification, setquelification] = React.useState('');


  const [selectedValue, setSelectedValue] = React.useState('Male');
  const [value, setValue] = React.useState('male');

  const [Email, setEmail] = React.useState('');
  const [location, setlocation] = React.useState('');

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

        <ProfilePhoto />

        <Text></Text>
        <Card style={{width: 120, backgroundColor: '#ff9933'}}>
          <Text
            style={{
              alignSelf: 'center',

              fontSize: 20,
            }}>
            Basic Deatils
          </Text>
        </Card>

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
        <Dob />
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
        <View
      style={{
          
        flexDirection: 'row',
    
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        height: 59,
        borderColor: 'gray',
        paddingTop: 13,
      }}>
      <Text style={{fontSize:17,paddingVertical:5,color:'gray',paddingHorizontal:8,left:10}}>Gender</Text>
      <RadioButton.Group   
        onValueChange={(value) => setValue(value)}
        value={value}>
        <RadioButton style={{paddingRight:50}} value="male" />
        <Text style={{paddingTop: 6, fontSize: 16}}>Male</Text>

        <RadioButton value="female" />
        <Text style={{paddingTop: 6, fontSize: 16}}>Female</Text>

        <RadioButton value="Others" />
        <Text style={{paddingTop: 6, fontSize: 16,}}>Others</Text>
      </RadioButton.Group>
    </View>

        {/* <RNB /> */}

        {/* <Location /> */}

        <TextInput

            label="location"
            mode="outlined"
            value={location}
            style={styles.textbox}
            value={location} onChangeText={(location) => setlocation(location)}


          />
        <Text></Text>
        <Text></Text>
        <Card style={{width: 180, backgroundColor: '#ff9933'}}>
          <Text
            style={{
              alignSelf: 'center',

              fontSize: 20,
            }}>
            Quelification Details{' '}
          </Text>
        </Card>

        {/* <SearchInput /> */}
        <TextInput
          label="Quelification"
          mode="outlined"
          value={quelification}
          style={styles.textbox}
          onChangeText={(quelification) => setquelification(quelification)}
        />

        <TextInput
          label="Specialization"
          mode="outlined"
          value={specialization}
          style={styles.textbox}
          onChangeText={(specialization) => setspecialization(specialization)}
        />
            <Text></Text>
        <MultiSelect />
        <Text></Text>
        <FileUpload />
        <Text></Text>
        <MultiSelectJob  />


        <View style={{paddingTop: 40, marginHorizontal: 100}}>
          <Button
            color="#00cc00"
            title="Submit"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

export default ProfileCandidate;

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
