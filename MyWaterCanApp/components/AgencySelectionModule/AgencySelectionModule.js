import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
 TouchableOpacity,
  View,
  Text
  } from 'react-native';
  import { connect } from 'react-redux';
  import {screens} from '../../constants/constants'


class AgencySelectionModule extends Component {
  constructor(props){
    super(props);
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
     <Text>"AgencySelectionModule"</Text>
     </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AgencySelectionModule);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    height: '100%',
    width: '100%'
  }
});