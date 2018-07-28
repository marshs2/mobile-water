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
import Counter from './components/Counter'
import CanSelection from'./components/BookingModule/CanSelection'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { 
  createStore, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import {reducer,fetchCounter,testing,masterReducer} from './reducers/CounterReducer';


const reducers = combineReducers({
 reducer,
 fetchCounter,
 testing
});

const store = createStore(
  masterReducer,
  applyMiddleware(thunk)
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style = {styles.container} >
        <Provider store={store}>
          <CanSelection/>
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
