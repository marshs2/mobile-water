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
import {currentLocationUpdate,searchOnFocus} from '../../actions/Actions';
import NavigationButton from '../common/NavigationButton';
import GPSButton from '../common/GPSButton'

// Questions
import Questions from './Questions';
import AddressAdditionalDetail from './AddressAdditionalDetail';


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
      {/*Mini Map */}
      <View style= {styles.MiniMapContainer}>
        <TouchableOpacity style = {styles.container} onPress = {this.NavigationButtonHandler}>
          <UserLocationMapView currentUserLocation={this.props.currentUserLocation} currentLocationSuccessAction={this.props.currentLocationSuccessAction}/>
         </TouchableOpacity>
      </View>
      
      {/* Questions */}
      <View style={styles.questionsContainer}>
        <Questions></Questions>
      </View>  

      {/* Address Additonal Details */}
      <View style={styles.addressAdditionalContainer}>
        <AddressAdditionalDetail></AddressAdditionalDetail>
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
  MiniMapContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'red'
  },
  NavigationButtonContainer:{
    position: 'absolute',
    bottom: '2%',
    right: '5%',
    borderRadius: 25,
    height: 50,
    width: 50
  },
  questionsContainer:{
    height: '40%',
    width: '100%',
    backgroundColor: 'orange'
  },
  addressAdditionalContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'blue'
  }
});