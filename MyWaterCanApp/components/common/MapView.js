import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class UserLocation extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
     <MapView style = {styles.container}
     region = {{
      latitude: this.props.currentUserLocation.latitude,
      longitude: this.props.currentUserLocation.longitude,
      latitudeDelta: 0.00122,
      longitudeDelta: 0.00122,
    }}
    initialRegion={{
      latitude: 13.0517102,
      longitude: 80.1899955,
      latitudeDelta: 0.00122,
      longitudeDelta: 0.00121,
    }}>
    
    <Marker
      coordinate={{latitude:this.props.currentUserLocation.latitude,longitude: this.props.currentUserLocation.longitude}}
    />
    </MapView>
    );
  }
}
const styles = StyleSheet.create({
    
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '70%',
    width: '100%',
    backgroundColor: 'red',
  }
});

export default UserLocation;