import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
 TouchableOpacity,
  View,
  Text
  } from 'react-native';

// Floor Question Component
import {Floor} from './Floor';

// Lift Question Component
import {Lift} from './Lift';

export default class Questions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Floor></Floor>
                <Lift></Lift>
            </View>
        );
    }
}
const styles = {
    container:{
        height: '100%',
        width: '100%'
    }
}
