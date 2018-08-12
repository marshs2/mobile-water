import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { CheckBox, Button } from 'react-native-elements'
  import { connect } from 'react-redux';
  import {canIncrementer,canDecrementer,fetchCounter, initialLoad, emergencyChange, bookNow} from '../actions/Actions';
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
                <CanQuantity increment={this.props.increment} decrement={this.props.decrement} count={ this.props.count } />
                <EmergencyBooking emergency={this.props.emergency} emergencyChange={this.props.emergencyChange}/>
                <Button title = 'Book Now' onPress = {this.props.bookNow}></Button>
            </View>
        )
    }

 }
const mapDispatchToProps = (dispatch) => {
    return {
        initialLoad: () => dispatch(initialLoad()),
        bookNow: () => dispatch(bookNow()),
        increment: () => dispatch(canIncrementer()),
        decrement: () => dispatch(canDecrementer()),
        emergencyChange: () => dispatch(emergencyChange())
    };
};
function mapStateToProps(state) {
    return {
      quantity: state.canQuantity,
      unit: state.canUnit,
      count: state.canCount,
      emergency: state.emergency
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(BookingModule);