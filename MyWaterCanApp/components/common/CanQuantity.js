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
export class CanQuantity extends React.Component {


    render() {
        return (
            <View>
                {/*<Button title = '<' onPress = {this.props.decrement}></Button>
                <Text>{this.props.count}</Text>
                <Button title = '>' onPress = {this.props.increment}></Button>*/}
                <Button title = '<' onPress = {this.props.decrement}></Button>
                <Text style={styles.counterStyle}>{this.props.count}</Text>
                <Button title = '>' onPress = {this.props.increment}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    counterStyle: { 
        fontSize : 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(canIncrementer()),
//         decrement: () => dispatch(canDecrementer()),
//     };
// };
// function mapStateToProps(state) {
//     console.log('Inital State', state);
//     return {
//         canCount: state.canCount
//     };
//   }
// export default connect(mapStateToProps, mapDispatchToProps)(CanQuantity);