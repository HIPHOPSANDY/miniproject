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

const PostJob = ({navigation}) => {
  const [JobName, setJobName] = React.useState('');
  const [CompanyName, setCompanyName] = React.useState('');
  const [Experience, setExperience] = React.useState('');
  const [ProjectDescription, setProjectDescription] = React.useState('');

  // const [selectedValue, setSelectedValue] = React.useState('Male');

  const [JobType, setJobType] = React.useState('');
  const [Skills, setSkills] = React.useState('');

  const [location, setlocation] = React.useState('');
  const [Duration, setDuration] = React.useState(' ');
  const [Indstry, setIndstry] = React.useState('');

  const [Salary, setSalary] = React.useState('');

  // handlesubmit
  const handleSubmit = async (evt) => {
    //POST json
    var dataToSend = {
      jobname: JobName,
      companyname: CompanyName,
      location: location,
      jobtype: JobType,
      experience: Experience,
      skills: Skills,
      duration: Duration,
      salary: Salary,
      indstry: Indstry,
      description: ProjectDescription,
      // id: '12345',
    };

    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');
    let response = await fetch(
      'https://agile-tor-14493.herokuapp.com/postjobs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: formBody,
      },
    );

    let json = await response.json();
    console.log('POST completed');
    console.log(json);

    navigation.navigate('Dashboard');
    // navigation.navigate('');
  };

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
          onChangeText={(JobName) => setJobName(JobName)}
        />
        <TextInput
          label="Company Name"
          mode="outlined"
          value={CompanyName}
          style={styles.textbox}
          onChangeText={(CompanyName) => setCompanyName(CompanyName)}
        />

        {/* <Location /> */}

        <TextInput
          label="location"
          mode="outlined"
          value={location}
          style={styles.textbox}
          value={location}
          onChangeText={(location) => setlocation(location)}
        />

        <TextInput
          label="Job Type"
          mode="outlined"
          keyboardType="email-address"
          value={JobType}
          style={styles.textbox}
          onChangeText={(JobType) => setJobType(JobType)}
        />

        {/* <Exp /> */}
        <TextInput
          label="Experience"
          mode="outlined"
          keyboardType="email-address"
          value={Experience}
          style={styles.textbox}
          onChangeText={(Experience) => setExperience(Experience)}
        />
        <TextInput
          label="skills"
          mode="outlined"
          keyboardType="email-address"
          value={Skills}
          style={styles.textbox}
          onChangeText={(Skills) => setSkills(Skills)}
        />
        <TextInput
          label="Duration"
          mode="outlined"
          keyboardType="email-address"
          value={Duration}
          style={styles.textbox}
          onChangeText={(Duration) => setDuration(Duration)}
        />
        {/* <Text></Text> */}
        {/* <MultiSelect /> */}

        {/* <Duration /> */}

        <TextInput
          label="Salary"
          keyboardType="numeric"
          maxLength={10}
          mode="outlined"
          value={Salary}
          style={styles.textbox}
          onChangeText={(Salary) => setSalary(Salary)}
        />

        <TextInput
          label="Indstry"
          keyboardType="email-address"
          maxLength={10}
          mode="outlined"
          value={Indstry}
          style={styles.textbox}
          onChangeText={(Indstry) => setIndstry(Indstry)}
        />

        {/* <Indestry /> */}

        <TextInput
          label="Project Description"
          mode="outlined"
          value={ProjectDescription}
          style={styles.textbox}
          onChangeText={(ProjectDescription) =>
            setProjectDescription(ProjectDescription)
          }
        />
        <Text></Text>

        <View style={{paddingTop: 40, marginHorizontal: 100}}>
          <Button
            color="#00cc00"
            onPress={handleSubmit}
            title="Submit"
            // onPress={() => props.navigation.navigate('Client DashBoard')}
          />
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

export default PostJob;

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
