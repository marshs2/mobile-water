import React from 'react'

import RadioGroup from 'react-native-radio-buttons-group';

import {
    Platform,
    StyleSheet,
   TouchableOpacity,
    View,
    Text
    } from 'react-native';
export const  Lift = (props) => {
        return (
            <View>
                {props.floor > 1 ? <RadioGroup radioButtons={props.data} onPress={props.setLiftAvailabilty} /> : <Text>Nothing</Text>}
            </View>
        );
}