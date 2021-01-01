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
import Dob from '../Component/Dob';
import SearchInput from '../Component/SearchInput';
import MultiSelect from '../Component/MultiSelect';
import FileUpload from '../Component/FileUpload';
import MultiSelectJob from '../Component/MulitiSelectJob';
import Exp from '../Component/Exp';
import Duration from '../Component/Duration';
import Indestry from '../Component/Indestry';



const options = [
  {label: '01:00', value: '1'},
  {label: '01:30', value: '1.5'},
  {label: '02:00', value: '2'},
];

const EditPost = (props) => {
  
  const [JobName, setJobName] = React.useState('');
  const [CompanyName, setCompanyName] = React.useState('');
  const [Position, setPosition] = React.useState('');
  const [ProjectDescription, setProjectDescription] = React.useState('');

  const [selectedValue, setSelectedValue] = React.useState('Male');

  const [JobType, setJobType] = React.useState('');

  const [Salary, setSalary] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Text></Text>

   

        <Text></Text>
        

        <TextInput
          label="JobName"
          mode="outlined"
          value={JobName}
          style={styles.textbox}
          onChangeText={(JobName) => setName(JobName)}
        />
 <TextInput
          label="Company Name"
          mode="outlined"
          value={CompanyName}
          style={styles.textbox}
          onChangeText={(CompanyName) => setCompanyName(CompanyName)}
        />
        
 <Location />

    
 <Text></Text>
 <Text></Text>
        <TextInput
          label="Job Type"
          mode="outlined"
          keyboardType="email-address"
          value={JobType}
          style={styles.textbox}
          onChangeText={(JobType) => setJobType(JobType)}
        />
        
<Exp />
<Text></Text>
<MultiSelect />


<Duration />




        <TextInput
          label="Salary"
          keyboardType="numeric"
          maxLength={10}
          mode="outlined"
          value={Salary}
          style={styles.textbox}
          onChangeText={(Salary) => setSalary(Salary)}
        />
      
       
       
       <Indestry />

        

        <TextInput
          label="Project Description"
          mode="outlined"
          value={ProjectDescription}
          style={styles.textbox}
          onChangeText={(ProjectDescription) => setProjectDescription(ProjectDescription)}
        />
            <Text></Text>
        


        <View style={{paddingTop: 40, marginHorizontal: 100}}>
          <Button
            color="#00cc00"
            title="Submit"
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

export default EditPost;

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
