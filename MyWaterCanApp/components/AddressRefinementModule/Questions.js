import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
 TouchableOpacity,
  View,
  Text
  } from 'react-native';

// Floor Question Component
import {Floor} from './Floor';

// Lift Question Component
import {Lift} from './Lift';

export default class Questions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            floor: -1,
            lift: -1,
            liftOptions:[
                {
                    label: "lift option not selected"
                },
                {
                    label: 'No',
                    value: false,
                    selected: false
                },
                {
                    label: 'Yes',
                    value: true,
                    selected: false
                }
            ]
        };
    }

    incrementFloor() {
        let temp = this.state.floor + 1; 
        this.setState({
            floor: temp
        });
        this.props.setFloor(temp);
    }

    decrementFloor() {
        let temp = this.state.floor > -1 ? this.state.floor - 1 : this.state.floor; 
        this.setState({
            floor: temp
        });
        this.props.setFloor(temp);
    }

    setLiftAvailability(){
        if(this.state.lift == -1){
            this.setState({lift: true});
            let temp = this.state.liftOptions;
            temp.shift();
            this.setState({liftOptions: temp});
        }
        let temp = !this.state.lift;
        this.setState({lift: temp});
        this.props.setLiftAvailability(temp);
    }
    render(){
        return (
            <View>
                <Floor decFlr={() => this.decrementFloor()} incFlr={() => this.incrementFloor()} floor={this.state.floor}></Floor>
                <Lift floor={this.state.floor} setLiftAvailabilty={() => this.setLiftAvailability()} liftAvailability={this.props.liftAvailability} data={this.state.liftOptions}></Lift>
            </View>
        );
    }
}
const styles = {
    container:{
        height: '100%',
        width: '100%'
    }
}
