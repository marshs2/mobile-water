import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { Button } from 'react-native-elements';
  import { connect } from 'react-redux';
  import {canIncrementer,canDecrementer, initialLoad, emergencyChange, bookNow} from '../../actions/Actions';
  import { CanQuantity } from '../common/CanQuantity';
  import { EmergencyBooking } from '../common/EmergencyBooking';
  import {screens} from '../../constants/constants';

 class BookingModule extends React.Component {

    componentDidMount() {
      // ;debugger
        this.props.initialLoad();
    }

    bookNowHandler = () => {
      this.props.navigator.push({
          screen: screens.ADDRESSREFINEMENT,
          title: 'Address Selection',
          navigatorStyle: {
            tabBarHidden: true
          }
      });
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>How many {this.props.quantity} {this.props.unit} do you want?</Text>
                <CanQuantity increment={this.props.increment} decrement={this.props.decrement} count={ this.props.count } />
                <EmergencyBooking emergency={this.props.emergency} emergencyChange={this.props.emergencyChange}/>
                <Button title = 'Book Now' onPress = {this.bookNowHandler} ></Button>
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

  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
export default connect(mapStateToProps, mapDispatchToProps)(BookingModule);