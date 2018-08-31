import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import marker from '../../images/pin.png'

class UserLocationMapView extends Component {

  constructor(props){
    super(props);
  }

  onRegionChange = (region) =>{
    console.log(region) 
    this.props.currentLocationSuccessAction({latitude: region.latitude ,longitude: region.longitude});
  }

  render() {
    return (
      <View  style = {styles.container}>
     <MapView style = {styles.map}
     onRegionChangeComplete={this.onRegionChange}
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
    
    {/* <Marker
      coordinate={{latitude:this.props.currentUserLocation.latitude,longitude: this.props.currentUserLocation.longitude}}
    /> */}
    </MapView>
    <Image style={styles.marker} source={marker} />
    </View>
    );
  }
}
const styles = StyleSheet.create({

  marker: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height:  50,
    width: 50,

    backgroundColor: 'rgba(0, 0, 0, 0.15)'
},
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
},
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
});

export default UserLocationMapView;