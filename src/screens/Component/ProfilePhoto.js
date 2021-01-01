import React, { Component } from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Card } from 'react-native-paper';

export default class ProfilePhoto extends Component {
  state = {
    avatarSource: null,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card style={{ borderRadius: 75 }}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer]}>
              {this.state.avatarSource === null ? (
                <Text>Profile</Text>
              ) : (
                  <Image style={styles.avatar} source={this.state.avatarSource} />
                )}
              <Image
                source={require('../../img/Mix_color_5__camera-512.png')}
                resizeMode="contain"
                style={{
                  top: 100,
                  left: 75,
                  width: 100,
                  height: 50,
                  position: 'absolute',
                  
                }}></Image>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    borderColor: 'gray',
    borderWidth: 1 / PixelRatio.getFontScale(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    backgroundColor: '#fff',
    height: 150,
  },
});
