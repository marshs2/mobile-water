/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CanSelection from'./components/BookingModule/CanSelection'
import BookingModule from './components/BookingModule'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { 
  createStore, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import {reducer,fetchCounter,testing,masterReducer} from './reducers/CounterReducer';

const store = createStore(
  masterReducer,
  applyMiddleware(thunk)
);

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  navigateToUserLocation = () => {
      this.props.navigator.push({
          screen: 'UserLocationScreen',
          title: 'User Location'
      });
  }

  render() {
    return (
      <View style = {styles.container} >
        <Provider store={store}>
          <BookingModule navigateToUserLocation={this.navigateToUserLocation}/>
        </Provider>
      </View>
    );
  }
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
