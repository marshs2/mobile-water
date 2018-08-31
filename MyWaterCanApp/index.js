import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {masterReducer} from './reducers/CounterReducer';

import { 
  createStore, 
  applyMiddleware 
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
        icon: require('./images/water.png'),
        selectedIcon: require('./images/water.png')
      }
    ],
    tabsStyle: {
    },
    appStyle: {
      orientation: 'portrait',
      tabBarHidden: true
    }
});
