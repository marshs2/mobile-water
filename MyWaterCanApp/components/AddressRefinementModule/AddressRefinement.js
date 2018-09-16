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
import {currentLocationUpdate,searchOnFocus, setFloor, setLiftAvailability} from '../../actions/Actions';
import NavigationButton from '../common/NavigationButton';
import GPSButton from '../common/GPSButton';
import {screens} from '../../constants/constants'


// Questions
import Questions from './Questions';
import AddressAdditionalDetail from './AddressAdditionalDetail';


class AddressRefinement extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'NEXT', // for a textual button, provide the button title (label)
        id: 'next', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        // disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ]
  };
  constructor(props){
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'next') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.push({
          screen: screens.AGENCYSELECTIONMODULE, // unique ID registered with Navigation.registerScreen
          title: 'AgencySelectionModule', // title of the screen as appears in the nav bar (optional)
        }); 
      }
    }
  }

  componentDidMount(){
   
    getGPSLocation(this.props.currentLocationSuccessAction);
  }
  
  NavigationButtonHandler = () => {

    this.props.navigator.showModal({
      screen: screens.USERLOCATION, // unique ID registered with Navigation.registerScreen
      title: 'User Location', // title of the screen as appears in the nav bar (optional)
      animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
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
        <Questions 
          floor = {this.props.floor} setFloor={this.props.setFloor} 
          liftAvailability = {this.props.liftAvailability} setLiftAvailability = {this.props.setLiftAvailability}
        ></Questions>
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
}

const mapDispatchToProps = (dispatch) => {
  return {
      currentLocationSuccessAction: (value) => dispatch(currentLocationUpdate(value)),
      setFloor: (value) => dispatch(setFloor(value)),
      setDoorNo: (value) => dispatch(setDoorNo(value)),
      setLandmark : (value) => dispatch(setLandmark(value)),
      setLiftAvailability: (value) => dispatch(setLiftAvailability(value)),
      searchOnFocus: () => dispatch(searchOnFocus()),
  };
};
function mapStateToProps(state) {
  return {
    currentUserLocation : state.currentUserLocation,
    search_onFocus: state.searchOnFocus,
    doorNo: state.doorNo,
    landmark: state.landmark,
    floor: state.floor,
    liftAvailability: state.liftAvailability,
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