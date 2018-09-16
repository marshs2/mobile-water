import React from 'react'

import {
    Platform,
    StyleSheet,
   TouchableOpacity,
    View,
    Text
    } from 'react-native';
export const  Floor = (props) => {
    return (
        <View>
            <TouchableOpacity style = {styles.button} onPress = {props.decFlr}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text>{props.floor}</Text>
            <TouchableOpacity style = {styles.button} onPress = {props.incFlr}>
                <Text>+</Text>
            </TouchableOpacity>
                
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        marginTop:2,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        height: 40,
        width: 40

    },
    imageStyle: {
        height: '100%',
        width: '100%',
        resizeMode: "contain"
    }
  })