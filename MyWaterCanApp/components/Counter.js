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
import LoginButton from './LoginButton';
 class Counter extends React.Component {

    render() {
        return (
            <View style={styles.mainConatinerStyle}>
            <View style={styles.mainConatinerStyle}>
                <Text style={styles.counterStyle}>{""}</Text>
                <Button title = '-' onPress = {this.props.decrement}></Button>
                <Text style={styles.counterStyle}>{this.props.count}</Text>
                <Text style={styles.counterStyle}>{this.props.testing}</Text>
                <Button title = '+' onPress = {this.props.increment}></Button>
                <Button title = 'Fetch' onPress = {this.props.fetch}></Button>  
            </View>
            <LoginButton style={styles.bottomView}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainConatinerStyle: {
        width: '100%',
        top: 44,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterStyle: { 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9900'
    },
  });
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