import React, { Component } from 'react';

import { TextInput } from 'react-native-paper';
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

import PasswordComponent from './Component/PasswordComponent';
import { Card } from 'react-native-paper';

const LoginUser = (props) => {
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingBottom: 10,
        backgroundColor: '#000',
      }}>
      <ImageBackground
        style={{ height: 700, flex: 1 }}
        imageStyle={{ opacity: 0.5 }}
        source={require('../img/img.webp')}
      />
      <ScrollView>
        <Card style={{ borderRadius: 15, marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 20 }}>
            <TextInput
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              value={Email}
              style={{ backgroundColor: '#fff', paddingTop: 10 }}
              onChangeText={(Email) => setEmail(Email)}
            />

            <PasswordComponent
              onChangeText={(Password) => setPassword(Password)}
            />
            <Text></Text>
          </View>
        </Card>

        <View style={{ paddingTop: 10, marginHorizontal: 100 }}>
          <Button
            color="#00cc00"
            title="login"
            onPress={() => props.navigation.navigate('Post Job')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginUser;

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
