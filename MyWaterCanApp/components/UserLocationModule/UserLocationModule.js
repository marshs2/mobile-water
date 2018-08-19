import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View } from 'react-native';

import {getGPSLocation} from '../../services/GPSServices';
import MapView from 'react-native-maps';

class UserLocation extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
   getGPSLocation();
  }

  render() {
    return (
      <MapView style={styles.container}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  //     <View style={styles.container}>
  //      <MapView style={styles.container}
  //   initialRegion={{
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }}
  // />
  //       <Text>User Location</Text>

  //       <Text>Google Search Input Module</Text>
  //       <Text>Map Component</Text>
  //     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default UserLocation;