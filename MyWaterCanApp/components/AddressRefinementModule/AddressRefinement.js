import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View 
  } from 'react-native';
  import { connect } from 'react-redux';

import {getGPSLocation} from '../../services/GPSServices';
import UserLocationMapView from '../common/UserLocationMapView';
import {currentLocationUpdate,searchOnFocus} from '../../actions/Actions';
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
    this.props.navigator.push({
        screen: 'UserLocationScreen',
        title: 'User Location'
    });
  }
  render() {
    return (
    <View style =  {styles.container}>
      <View style= {styles.mapContainer}>
        <UserLocationMapView currentUserLocation={this.props.currentUserLocation} currentLocationSuccessAction={this.props.currentLocationSuccessAction}/>
      </View>
      <View style = {styles.NavigationButtonContainer}>
        <NavigationButton next={this.NavigationButtonHandler} />
      </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddressRefinement);
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