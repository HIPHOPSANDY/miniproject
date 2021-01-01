import React, {Component} from 'react';
import {View} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Card } from 'react-native-paper';
import { color } from 'react-native-reanimated';

const items = [
  // this is the parent or 'item'
  {
    name: 'programming',
    id: 0,
   
    // these are the children or 'sub items'
    children: [
      {
        name: 'C++',
        id: 10,
      },
      {
        name: 'java',
        id: 17,
      },
      {
        name: 'C#',
        id: 13,
      },
      {
        name: 'VB',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({selectedItems});
    
  };

  render() {
    return (
      <View style={{borderWidth:1 ,borderColor:'#fff',borderRadius:5 }}>
        <Card >
        <SectionedMultiSelect
        
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Skills"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
        </Card>
      </View>
    );
  }
}
