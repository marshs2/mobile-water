import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { CheckBox } from 'react-native-elements'
 export class EmergencyBooking extends React.Component {

    render() {
        return (
            <View>
                <CheckBox
                    center
                    title='Emergency Booking'
                    checked={this.props.emergency}
                    onPress={this.props.emergencyChange}
                />
            </View>
        )
    }
}