import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
 TouchableOpacity,
  View 
  } from 'react-native';
  import { connect } from 'react-redux';

import {getGPSLocation} from '../../services/GPSServices';
import UserLocationMapView from '../common/UserLocationMapView';
import {currentLocationUpdate,searchOnFocus,reverseGeoCode} from '../../actions/Actions';
import NavigationButton from '../common/NavigationButton';
import GPSButton from '../common/GPSButton'


class AddressRefinement extends Component {
  
  constructor(props){
    super(props);
  }
  componentDidMount(){
   
    getGPSLocation(this.props.currentLocationSuccessAction);
  }

  
  NavigationButtonHandler = () => {

    this.props.navigator.showModal({
      screen: 'UserLocationScreen', // unique ID registered with Navigation.registerScreen
      title: 'User Location', // title of the screen as appears in the nav bar (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    }); 
  }
  render() {
    return (
    <View style =  {styles.container}>
      <View style= {styles.mapContainer}>
        <TouchableOpacity style = {styles.container} onPress = {this.NavigationButtonHandler}>
          <UserLocationMapView reverseGeoCode={this.props.reverseGeoCode} currentUserLocation={this.props.currentUserLocation} currentLocationSuccessAction={this.props.currentLocationSuccessAction}/>
         </TouchableOpacity>
      </View>
      
      {/* <View style = {styles.NavigationButtonContainer}>
        <NavigationButton next={this.NavigationButtonHandler} />
      </View> */}
    </View>
  
    );
  }
  showULM() {
    console.log('india show ulm')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      currentLocationSuccessAction: (value) => dispatch(currentLocationUpdate(value)),
      searchOnFocus: () => dispatch(searchOnFocus()),
      reverseGeoCode: (lat, lng) => dispatch(reverseGeoCode(lat, lng))
  };
};
function mapStateToProps(state) {
  // debugger;
  return {
    currentUserLocation : state.currentUserLocation,
    search_onFocus: state.searchOnFocus
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressRefinement);
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
    width: '100%'
  },
  searchContainerActive: {
    height: '100%'
  },
  mapContainer: {
    height: '30%'
  },
  mapContainerInactive: {
    height: '0%',
    marginTop: 50
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