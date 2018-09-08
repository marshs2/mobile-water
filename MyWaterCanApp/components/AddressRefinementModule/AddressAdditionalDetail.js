import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
 TouchableOpacity,
  View,
  Text
  } from 'react-native';

//Landmark Component
import {Landmark} from './Landmark';
// DoorNo Component
import {DoorNo} from './DoorNo';

export default class AddressAdditionalDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <DoorNo></DoorNo>
                <Landmark></Landmark>
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
