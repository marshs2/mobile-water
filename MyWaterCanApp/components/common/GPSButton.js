import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';

  import {getGPSLocation} from '../../services/GPSServices';

export default class GPSButton extends React.Component {

    constructor(props){
        super(props);
        this.getGPS = this.getGPS.bind(this);
    }

    getGPS(){
        getGPSLocation(this.props.currentLocationSuccessAction);
    }
    render() {
        return (
            <View style = {styles.buttonStyle}>
                <Button title = '#' onPress = {this.getGPS}>
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