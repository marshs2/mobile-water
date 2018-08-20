import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View } from 'react-native';
  import { connect } from 'react-redux';
import { SearchPlaces } from '../common/SearchPlaces';

import {getGPSLocation} from '../../services/GPSServices';
import MapView from '../common/MapView';
import {currentLocationUpdate} from '../../actions/Actions'

class UserLocation extends Component {
  
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    getGPSLocation(this.props.currentLocationSuccessAction);
  }

  render() {
    return (
    <View style =  {styles.container}>
    <SearchPlaces currentLocationSuccessAction={this.props.currentLocationSuccessAction}/>
     <MapView currentUserLocation={this.props.currentUserLocation} />
     </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      currentLocationSuccessAction: (value) => dispatch(currentLocationUpdate(value)),
  };
};
function mapStateToProps(state) {
  debugger;
  return {
    currentUserLocation : state.currentUserLocation
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLocation);
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