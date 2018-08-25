import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View } from 'react-native';
  import { connect } from 'react-redux';
import { SearchPlaces } from '../common/SearchPlaces';

import {getGPSLocation} from '../../services/GPSServices';
import UserLocationMapView from '../common/UserLocationMapView';
import {currentLocationUpdate,searchOnFocus} from '../../actions/Actions';


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
      <SearchPlaces currentLocationSuccessAction={this.props.currentLocationSuccessAction} searchOnFocus={this.props.searchOnFocus}/>
    
      {!this.props.search_onFocus ? (<UserLocationMapView currentUserLocation={this.props.currentUserLocation} />): (<View/>)} 
    </View>
  
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      currentLocationSuccessAction: (value) => dispatch(currentLocationUpdate(value)),
      searchOnFocus: () => dispatch(searchOnFocus()),
  };
};
function mapStateToProps(state) {
  // debugger;
  return {
    currentUserLocation : state.currentUserLocation,
    search_onFocus: state.searchOnFocus
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLocation);
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '80%',
    width: '100%'
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
  container1: {
    height: '20%',
    width: '100%',
    backgroundColor: '#F5FCFF'
  }
});