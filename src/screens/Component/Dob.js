//This is an example code to get DatePicker//
import React, { Component } from 'react';
//import react in our code.
import { View, StyleSheet } from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class Dob extends Component {
    constructor(props) {
        super(props);
        
        //set value in state for initial date
        this.state = { date: '' };
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePicker
                    style={{ width: 310 }}
                    date={this.state.date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="Date Of Birth"
                    format="DD-MM-YYYY"
                    minDate="01-01-1980"
                    maxDate="01-01-2022"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            display: 'none',
                        },
                        dateInput: {
                            height: 50,

                            borderWidth: 1,
                            margin: -5,
                            borderRadius: 3,
                            backgroundColor: '#fff',
                            borderColor: 'gray',
                        },
                        placeholderText: {
                            color: 'gray',
                            fontSize: 16,
                            paddingRight: 200,
                        },
                    }}
                    onDateChange={(date) => {
                        this.setState({ date: date });
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        justifyContent: 'center',
        marginTop: 20,
    },
});
