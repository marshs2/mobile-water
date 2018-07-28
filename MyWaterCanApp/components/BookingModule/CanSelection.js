import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
import { connect } from 'react-redux';
import {counterIncrementer,counterDecrementer,fetchCounter,initialState,canIncrementer,canDecrementer} from '../../actions/Actions'
 class CanSelection extends React.Component {
     componentDidMount() {
         this.props.initialLoad()
     }
    render() {
        return (
            <View style={styles.mainConatinerStyle}>
                <Text style={styles.counterStyle}>{"How many"}</Text>
                <Text style={styles.counterStyle}>{this.props.canQuantity} {this.props.canUnit}</Text>
                <Text style={styles.counterStyle}>{"cans do u need"}</Text>
                <Button title = '-' onPress = {this.props.decrement}></Button>
                <Text style={styles.counterStyle}>{this.props.canCount}</Text>
                <Button title = '+' onPress = {this.props.increment}></Button>
                <Button title = 'Fetch' onPress = {this.props.fetch}></Button>  
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
        fontSize : 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(canIncrementer()),
        decrement: () => dispatch(canDecrementer()),
        fetch: () => dispatch(fetchCounter()),
        initialLoad: () => dispatch(initialState())
    };
};
function mapStateToProps(state) {
    return {
        canQuantity: state.canQuantity,
        canUnit: state.canUnit,
        canCount: state.canCount
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(CanSelection);