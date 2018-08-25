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
      <View style={[this.props.search_onFocus ? styles.searchContainerActive : styles.searchContainerInactive]}>
        <SearchPlaces currentLocationSuccessAction={this.props.currentLocationSuccessAction} searchOnFocus={this.props.searchOnFocus}/>
      </View>
      <View style={![this.props.search_onFocus ? styles.mapContainerActive : styles.mapContainerInactive]}>
        <UserLocationMapView currentUserLocation={this.props.currentUserLocation} />
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
    height: '10%'
  },
  mapContainerActive: {
    height: '80%'
  },
  mapContainerInactive: {
    height: '0%'
  }
});