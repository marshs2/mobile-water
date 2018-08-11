import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  import { CheckBox } from 'react-native-elements'
  import { connect } from 'react-redux';
  import {counterIncrementer,counterDecrementer,fetchCounter, initialLoad} from '../actions/Actions';
  import { CanQuantity } from './common/CanQuantity';
  import { EmergencyBooking } from './common/EmergencyBooking';
 class BookingModule extends React.Component {

     componentDidMount() {
         this.props.initialLoad();
     }
    render() {
        return (
            <View>
                <Text>How many {this.props.quantity} {this.props.unit} do you want?</Text>
                <CanQuantity />
                <EmergencyBooking />
                <Button title = 'Book Now' onPress = {this.props.bookNow}></Button>
            </View>
        )
    }

 }
const mapDispatchToProps = (dispatch) => {
    return {
        initialLoad: () => dispatch(initialLoad()),
        bookNow: () => dispatch(bookNow())
    };
};
function mapStateToProps(state) {
    return {
      quantity: state.canQuantity,
      unit: state.canUnit
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(BookingModule);