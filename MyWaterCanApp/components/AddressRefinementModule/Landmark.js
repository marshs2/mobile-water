import React from 'react'

import {
    Platform,
    StyleSheet,
   TouchableOpacity,
    View,
    TextInput
    } from 'react-native';
export const  Landmark = (props) => {
    return (
        <View>
            <TextInput placeholder = 'Landmark:'></TextInput>
        </View>
    );
}