import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  import { connect } from 'react-redux';
  import {counterIncrementer,counterDecrementer,fetchCounter} from '../actions/Actions'
 class Counter extends React.Component {

    render() {
        return (
            <View>
                <Text>{this.props.isloading? "loading":"counter"}</Text>
                <Button title = '-' onPress = {this.props.decrement}></Button>
                <Text>{this.props.count}</Text>
                <Text>{this.props.testing}</Text>
                <Button title = '+' onPress = {this.props.increment}></Button>
                <Button title = 'Fetch' onPress = {this.props.fetch}></Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Counter);