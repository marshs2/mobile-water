import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
export class CanQuantity extends React.Component {


    render() {
        return (
            <View>
                <Button title = '<' onPress = {this.props.decrement}></Button>
                <Text style={styles.counterStyle}>{this.props.count}</Text>
                <Button title = '>' onPress = {this.props.increment}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    counterStyle: { 
        fontSize : 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });