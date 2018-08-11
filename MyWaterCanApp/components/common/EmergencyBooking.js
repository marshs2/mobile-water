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
  import {counterIncrementer,counterDecrementer,fetchCounter} from '../../actions/Actions'
 export class EmergencyBooking extends React.Component {


    render() {
        return (
            <View>
                <CheckBox
                    center
                    title='Emergency Booking'
                    checked={this.props.checked}
                />
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(counterIncrementer()),
        decrement: () => dispatch(counterDecrementer()),
        fetch: () => dispatch(fetchCounter())
    };
};
function mapStateToProps(state) {
    return {
      count: state.reducer,
      testing: state.testing,
      isloading: state.fetchCounter
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(EmergencyBooking);