import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  import { connect } from 'react-redux';
  import {signUp} from '../actions/Actions'
 class Counter extends React.Component {

    render() {
        return (
            <View style={styles.bottomView}>
                <Button  title = 'SIGNUP' onPress = {this.props.signUp}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomView:{
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 100
      },
  });

const mapDispatchToProps = (dispatch) => { 
    return {
        signUp: () => dispatch(signUp())
    };
};
function mapStateToProps(state) {
    return {
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);