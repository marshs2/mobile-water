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

class AddressRefinement extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
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
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
      }
    }
  }

  componentDidMount(){
   
    getGPSLocation(this.props.currentLocationSuccessAction);
  }
  
  NavigationButtonHandler = () => {

    this.props.navigator.showModal({
      screen: 'UserLocationScreen', // unique ID registered with Navigation.registerScreen
      title: 'User Location', // title of the screen as appears in the nav bar (optional)
      animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      rightButtons: [{ // buttons for the right side of the nav bar (optional)
        title: 'Edit', // if you want a textual button
          // icon: require('../../img/navicon_edit.png'), // if you want an image button
        component: 'example.CustomButton', // if you want a custom button
        passProps: {}, // Object that will be passed as props to custom components (optional)
        id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
        testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
        disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        systemItem: 'compose', // Optional, iOS only. Set a system bar button item as the icon. Matches UIBarButtonSystemItem naming.
      }]
    }); 
  }
  render() {
    return (
    <View style =  {styles.container}>
      <View style= {styles.mapContainer}>
        <TouchableOpacity style = {styles.container} onPress = {this.NavigationButtonHandler}>
          <UserLocationMapView currentUserLocation={this.props.currentUserLocation} currentLocationSuccessAction={this.props.currentLocationSuccessAction}/>
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