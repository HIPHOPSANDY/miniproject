import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const PasswordComponent = () => {
  const [hidePassword, switchPassword] = React.useState(true);
  const setPasswordVisibility = () => {
    switchPassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBoxContainer}>
        <TextInput
          secureTextEntry={hidePassword}
          label="Password"
          mode="outlined"
          style={styles.textBox}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.touchableButton}
          onPress={(e) => setPasswordVisibility(e)}>
          <Image
            source={
              hidePassword
                ? require('../../img/1446378-200.png')
                : require('../../img/show_hide_password-07-512.webp')
            }
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10},
  headerText: {},
  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    
  },
  textBox: {
    backgroundColor: '#fff',

    fontSize: 15,
    alignSelf: 'stretch',

    borderColor: '#000',
  },
  touchableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});
export default PasswordComponent;
