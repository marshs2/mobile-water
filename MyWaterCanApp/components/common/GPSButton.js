import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
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
            <View style={styles.container}>
                <View style = {styles.buttonStyle}>
                    {/* <Button title = '#' onPress = {this.getGPS}>
                    </Button> */}
                    <TouchableOpacity style = {styles.button} onPress = {this.getGPS}>
                        <Image style={styles.imageStyle} source={require("../../images/GPS.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: "100%"
    },
    buttonStyle: {
        alignItems: 'flex-end'
    },
    button: {
        // backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        marginTop: 5,
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
  });