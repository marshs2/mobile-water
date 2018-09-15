import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import {Button} from 'react-native-elements'
  import { connect } from 'react-redux';
import { SearchPlaces } from '../common/SearchPlaces';

import {getGPSLocation} from '../../services/GPSServices';
import UserLocationMapView from '../common/UserLocationMapView';
import {currentLocationUpdate,searchOnFocus, clearSearch} from '../../actions/Actions';
import NavigationButton from '../common/NavigationButton';
import GPSButton from '../common/GPSButton'


class UserLocation extends Component {
  
  constructor(props){
    super(props);
  }
  componentDidMount(){
    getGPSLocation(this.props.currentLocationSuccessAction);
  }

  
  NavigationButtonHandler = () => {
    this.props.navigator.push({
        screen: 'UserLocationScreen',
        title: 'User Location'
    });
  }


  render() {
    return (
    <View style =  {styles.container}>
      <View style={[this.props.search_onFocus ? styles.searchContainerActive : styles.searchContainerInactive]}>
        <SearchPlaces currentLocationSuccessAction={this.props.currentLocationSuccessAction} searchOnFocus={this.props.searchOnFocus}/>
        <Text style = {{
          position: 'absolute',
          height:  40,
          width: 40,
          right: 20,
          top: 10
        }} onPress={this.props.clearSearch}>X</Text>
        <GPSButton  currentLocationSuccessAction={this.props.currentLocationSuccessAction} />
      </View>
      <View style={[!this.props.search_onFocus ? styles.mapContainerActive : styles.mapContainerInactive]}>
        <UserLocationMapView currentUserLocation={this.props.currentUserLocation} currentLocationSuccessAction={this.props.currentLocationSuccessAction}/>
      </View>
      {/* <View style = {styles.NavigationButtonContainer}>
        <NavigationButton next={this.NavigationButtonHandler} />
      </View> */}
      <View style = {styles.confirm}>
        <Button title = "CONFIRM" onPress = {()=>{this.props.navigator.dismissModal({
          animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });}}/>
      </View>
    </View>
  
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      currentLocationSuccessAction: (value) => dispatch(currentLocationUpdate(value)),
      searchOnFocus: () => dispatch(searchOnFocus()),
      clearSearch: () => dispatch(clearSearch())
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
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
    width: '100%'
  },
  searchContainerActive: {
    height: '100%'
  },
  searchContainerInactive: {
    height: 40
  },
  mapContainerActive: {
    height: '95%',
    marginTop: 0
  },
  mapContainerInactive: {
    height: '0%',
    marginTop: 50
  },
  confirm:{
    position: 'absolute',
    width: '100%',
    bottom: '4%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  NavigationButtonContainer:{
    position: 'absolute',
    bottom: '2%',
    right: '5%',
    borderRadius: 25,
    height: 50,
    width: 50
  }
});