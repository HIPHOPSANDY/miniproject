import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
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
      </View>
    );
  }
}
