import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View } from 'react-native';
import { SearchPlaces } from '../common/SearchPlaces';

import {getGPSLocation} from '../../services/GPSServices';
import MapView from '../common/MapView';

class UserLocation extends Component {
  
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
   getGPSLocation();
  }

  render() {
    return (
    <View style =  {styles.container}>
     <MapView style = {styles.mapView}>
    </MapView>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  searchPlaces: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 400
  },
  mapView: {
    // height: 400,
    // backgroundColor: 'blue',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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