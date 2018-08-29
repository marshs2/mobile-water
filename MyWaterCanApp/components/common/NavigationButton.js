import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
export default class NavigationButton extends React.Component {


    render() {
        return (
            <View style = {styles.buttonStyle}>
                <Button title = '>' onPress = {this.props.next}>
                </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'flex-end'
    },
  });