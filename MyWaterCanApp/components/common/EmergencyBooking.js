import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { CheckBox } from 'react-native-elements'
  import { connect } from 'react-redux';
//  import { emergencyChange } from '../../actions/Actions'
 export class EmergencyBooking extends React.Component {


    render() {
        return (
            <View>
                <CheckBox
                    center
                    title='Emergency Booking'
                    checked={this.props.emergency}
                    onPress={this.props.emergencyChange}
                />
            </View>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         emergencyChange: () => dispatch(emergencyChange())
//     };
// };
// function mapStateToProps(state) {
//     return {
//       emergency: state.emergency
//     };
//   }
// export default connect(mapStateToProps, mapDispatchToProps)(EmergencyBooking);