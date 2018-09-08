import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import marker from '../../images/MapMarker.png'

class UserLocationMapView extends Component {

  constructor(props){
    super(props);
  }

  onRegionChangeComplete = (region) =>{
    console.log(region);
    this.props.reverseGeoCode(region.latitude, region.longitude);
    this.props.currentLocationSuccessAction({latitude: region.latitude ,longitude: region.longitude});
  }

  render() {
    return (
      <View  style = {styles.container}>
     <MapView style = {styles.map}
     onRegionChangeComplete={this.onRegionChangeComplete}
     onPress = {
       console.log('mapview on press')
     }
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
      longitudeDelta: 0.00122,
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
    height:  40,
    width: 40,

    // backgroundColor: 'rgba(0, 0, 0, 0.15)',
    resizeMode: 'contain'
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