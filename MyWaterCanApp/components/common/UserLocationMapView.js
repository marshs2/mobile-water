import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
Image,
TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import marker from '../../images/MapMarker.png'

class UserLocationMapView extends Component {
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
    //  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        AlertIOS.alert('NavBar', 'Edit button pressed');
      }
      if (event.id == 'add') {
        AlertIOS.alert('NavBar', 'Add button pressed');
      }
    }
  }
  componentDidMount() {
  }
  onRegionChangeComplete = (region) =>{
    console.log(region) 
    this.props.currentLocationSuccessAction({latitude: region.latitude ,longitude: region.longitude});
  }

  render() {
    return (
      <View  style = {styles.container}>
     <MapView style = {styles.map}
     onRegionChangeComplete={this.onRegionChangeComplete}
     onPress = {
       console.log('mapview on press')
     }
     region = {{
      latitude: this.props.currentUserLocation.latitude,
      longitude: this.props.currentUserLocation.longitude,
      latitudeDelta: 0.00122,
      longitudeDelta: 0.00122,
    }}
    initialRegion={{
      latitude: 13.0517102,
      longitude: 80.1899955,
      latitudeDelta: 0.00122,
      longitudeDelta: 0.00122,
    }}>
    
    {/* <Marker
      coordinate={{latitude:this.props.currentUserLocation.latitude,longitude: this.props.currentUserLocation.longitude}}
    /> */}
    </MapView>
      <Image style={styles.marker} source={marker} />
    </View>
    );
  }
}
const styles = StyleSheet.create({

  marker: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height:  40,
    width: 40,

    // backgroundColor: 'rgba(0, 0, 0, 0.15)',
    resizeMode: 'contain'
},
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
},
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
});

export default UserLocationMapView;