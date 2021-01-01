import * as React from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';

const RNB = () => {
  const [value, setValue] = React.useState('male');

  return (
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
  );
};

export default RNB;
