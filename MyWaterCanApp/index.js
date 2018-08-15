import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reducer,fetchCounter,testing,masterReducer} from './reducers/CounterReducer';

import { 
  createStore, 
  applyMiddleware, 
  combineReducers 
} from 'redux';

const store = createStore(
  masterReducer,
  applyMiddleware(thunk)
);


// start the app
registerScreens(store, Provider);

Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Book Now',
        screen: 'BookingModuleScreen',
        title: 'Book Can',
        icon: require('./images/water.png')
      }
    ]
});
