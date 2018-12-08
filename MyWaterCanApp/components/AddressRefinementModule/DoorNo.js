import React from 'react'

import {
    Platform,
    StyleSheet,
   TouchableOpacity,
    View,
    Text,
    TextInput
    } from 'react-native';
    // import { TextInput } from 'react-native-elements';
export const  DoorNo = (props) => {
    return (
        <View>
            <TextInput placeholder = "DOORNO:"></TextInput>
        </View>
    );
}